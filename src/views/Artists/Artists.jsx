import React from 'react'

import {
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
} from 'components'

import styles from './Artists.module.scss'

const MIN_NAME_LENGTH_TO_SEARCH = 4
const SEARCH_THROTTLE_INTERVAL_MS = 1_000

class Artists extends React.Component {
  state = {
    search: '',
    artists: [],
    artistNotFound: false,
  }

  getArtistByName = getThrottledCallback(async search => {
    const { items } = await this.client.getArtistsByName(search)
    const artists = items.map(artist => ({
      ...artist,
      image: getArtistImageByDimension(artist.images, 80, 600)?.url,
    }))
    const artistNotFound = !artists.length

    this.setState({ ...this.state, artists, artistNotFound })
  }, SEARCH_THROTTLE_INTERVAL_MS)

  getNotArtistCategory = () => {
    if (!this.state.search) return 'empty-search'

    if (this.state.artistNotFound) return 'not-found'

    return ''
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
      search: formattedSearch,
    })

    if (isReadyToSearch) this.getArtistByName(artistName)
  }

  render = () => {
    const remainingLetters = Math.max(
      MIN_NAME_LENGTH_TO_SEARCH - this.state.search.trim().length,
      0,
    )

    const noArtistCategory = this.getNotArtistCategory()

    return (
      <Layout>
        <div className={styles.wrapper}>
          <SearchBar
            value={this.state.search}
            onChange={this.handleSearchBarChange}
          />
          <NoArtistsMessage category={noArtistCategory} />
          <SearchRemainingLetters
            remaining={remainingLetters}
            show={!!this.state.search && !!remainingLetters}
          />
          <ArtistsList artists={this.state.artists} />
        </div>
      </Layout>
    )
  }
}

export default Artists
