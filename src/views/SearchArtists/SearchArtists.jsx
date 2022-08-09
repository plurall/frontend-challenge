import React from 'react'

import {
  clearToken,
  ClientError,
  getArtistImageByDimension,
  getThrottledCallback,
  removeUnnecessarySpaces,
  SpotifyClient,
} from 'utils'

import {
  Layout,
  SearchBar,
  NoArtistsMessage,
  ArtistsList,
  SearchRemainingLetters,
  LoadingArtistsList,
} from 'components'

import styles from './SearchArtists.module.scss'

const MIN_NAME_LENGTH_TO_SEARCH = 4
const SEARCH_THROTTLE_INTERVAL_MS = 1_000
const LOADING_ARTISTS_AMOUNT = 10
const MIN_ARTIST_IMAGE_SIZE = 80
const MAX_ARTIST_IMAGE_SIZE = 600

class SearchArtists extends React.Component {
  state = {
    search: '',
    artists: [],
    artistNotFound: false,
    totalArtists: 0,
    isLoading: false,
  }

  getArtistByName = getThrottledCallback(async search => {
    try {
      const { items, total } = await this.client.getArtistsByName(search)

      const artists = items.map(artist => ({
        ...artist,
        image: getArtistImageByDimension(
          artist.images,
          MIN_ARTIST_IMAGE_SIZE,
          MAX_ARTIST_IMAGE_SIZE,
        )?.url,
      }))

      this.setState({
        ...this.state,
        artists,
        totalArtists: total,
        artistNotFound: !artists.length,
        isLoading: false,
      })
    } catch (err) {
      if (err instanceof ClientError && err.status === 401) {
        this.sendUserToSignIn()
      }
    }
  }, SEARCH_THROTTLE_INTERVAL_MS)

  getNoArtistsCategory = () => {
    if (!this.state.search) return 'empty-search'

    if (this.state.artistNotFound) return 'not-found'

    return ''
  }

  sendUserToSignIn = () => {
    clearToken()
    window.location.reload()
  }

  client = new SpotifyClient()

  handleSearchBarChange = search => {
    const formattedSearch = removeUnnecessarySpaces(search, true)
    const artistName = formattedSearch.trim()
    const isReadyToSearch = artistName.length >= MIN_NAME_LENGTH_TO_SEARCH

    this.setState({
      ...this.state,
      artistNotFound: false,
      artists: isReadyToSearch ? this.state.artists : [],
      totalArtists: 0,
      search: formattedSearch,
      isLoading: isReadyToSearch,
    })

    if (isReadyToSearch) this.getArtistByName(artistName)
  }

  render = () => {
    const trimmedSearch = this.state.search.trim()

    const remainingLetters = Math.max(
      MIN_NAME_LENGTH_TO_SEARCH - trimmedSearch.length,
      0,
    )

    const noArtistCategory = this.getNoArtistsCategory()

    return (
      <Layout>
        <div className={styles.wrapper}>
          <SearchBar
            value={this.state.search}
            onChange={this.handleSearchBarChange}
          />
          <SearchRemainingLetters
            remaining={remainingLetters}
            show={!!trimmedSearch && !!remainingLetters}
          />
          <NoArtistsMessage category={noArtistCategory} />
          <ArtistsList
            show={
              !!this.state.artists.length &&
              !this.state.isLoading &&
              trimmedSearch.length >= MIN_NAME_LENGTH_TO_SEARCH
            }
            artists={this.state.artists}
            total={this.state.totalArtists}
          />
          <LoadingArtistsList
            show={
              !!trimmedSearch.length &&
              (this.state.isLoading ||
                trimmedSearch.length < MIN_NAME_LENGTH_TO_SEARCH)
            }
            artistsAmount={LOADING_ARTISTS_AMOUNT}
          />
        </div>
      </Layout>
    )
  }
}

export default SearchArtists
