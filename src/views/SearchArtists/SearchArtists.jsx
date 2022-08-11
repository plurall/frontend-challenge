import React from 'react'

import {
  clearToken,
  ClientError,
  getArtistImageByDimension,
  getThrottledCallback,
  removeUnnecessarySpaces,
  SpotifyClient,
  getDocumentScrollBottom,
  removeDuplicates,
} from 'utils'

import {
  Layout,
  SearchBar,
  EmptyListMessage,
  ArtistsList,
  SearchRemainingLetters,
  LoadingArtistsList,
  Loading,
} from 'components'

import styles from './SearchArtists.module.scss'

const MIN_NAME_LENGTH_TO_SEARCH = 4
const SEARCH_THROTTLE_INTERVAL_MS = 1_000
const LOADING_ARTISTS_AMOUNT = 10
const MIN_ARTIST_IMAGE_SIZE = 80
const MAX_ARTIST_IMAGE_SIZE = 600
const SCROLL_BOTTOM_THRESHOLD = 100

const getInitalState = () => ({
  search: '',
  page: 0,
  pages: 0,
  artists: [],
  totalArtists: 0,
  artistNotFound: false,
  isLoading: false,
})

class SearchArtists extends React.Component {
  state = getInitalState()

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  getArtistByName = getThrottledCallback(async search => {
    try {
      this.setState(state => ({ ...state, isLoading: true }))

      const response = await this.client.getArtistsByName(search, {
        page: this.state.search === search ? this.state.page + 1 : 1,
      })

      const { items, total, page, pages } = response

      const artists = items.map(artist => ({
        ...artist,
        image: getArtistImageByDimension(
          artist.images,
          MIN_ARTIST_IMAGE_SIZE,
          MAX_ARTIST_IMAGE_SIZE,
        )?.url,
      }))

      this.setState(state => ({
        ...state,
        page,
        pages,
        artists: removeDuplicates(
          page > 1 ? [...state.artists, ...artists] : artists,
          artist => artist.id,
        ),
        totalArtists: total,
        artistNotFound: page === 1 && !artists.length,
        isLoading: false,
      }))
    } catch (err) {
      if (err instanceof ClientError && err.status === 401) {
        this.sendUserToSignIn()
      }
    }
  }, SEARCH_THROTTLE_INTERVAL_MS)

  getNoArtistsCategory = () => {
    if (!this.state.search) return 'empty-search'

    if (this.state.artistNotFound) return 'artist-not-found'

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

    this.setState(state => ({
      ...state,
      ...getInitalState(),
      search: formattedSearch,
      isLoading: isReadyToSearch,
    }))

    if (isReadyToSearch) this.getArtistByName(artistName)
  }

  handleScroll = async () => {
    const reachThreshold = getDocumentScrollBottom() <= SCROLL_BOTTOM_THRESHOLD
    const { isLoading, page, pages } = this.state
    const hasPagesToLoad = page < pages

    if (!isLoading && hasPagesToLoad && reachThreshold) {
      await this.getArtistByName(this.state.search)
    }
  }

  render = () => {
    const trimmedSearch = this.state.search.trim()

    const remainingLetters = Math.max(
      MIN_NAME_LENGTH_TO_SEARCH - trimmedSearch.length,
      0,
    )

    const noArtistCategory = this.getNoArtistsCategory()

    const showArtists =
      !!this.state.artists.length &&
      (!this.state.isLoading || this.state.page) &&
      trimmedSearch.length >= MIN_NAME_LENGTH_TO_SEARCH

    const showLoadingList =
      !!trimmedSearch.length &&
      !this.state.page &&
      (this.state.isLoading || trimmedSearch.length < MIN_NAME_LENGTH_TO_SEARCH)

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
          <EmptyListMessage category={noArtistCategory} />
          <ArtistsList
            show={showArtists}
            artists={this.state.artists}
            total={this.state.totalArtists}
          />
          <LoadingArtistsList
            show={showLoadingList}
            artistsAmount={LOADING_ARTISTS_AMOUNT}
          />
          <Loading show={!!this.state.page && this.state.isLoading} />
        </div>
      </Layout>
    )
  }
}

export default SearchArtists
