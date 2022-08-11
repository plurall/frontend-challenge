import React from 'react'
import PropTypes from 'prop-types'

import {
  AlbumsList,
  ArtistDetailedCard,
  Layout,
  EmptyListMessage,
  LoadingArtistDetailedCard,
  LoadingAlbumsList,
  Loading,
} from 'components'

import {
  clearToken,
  ClientError,
  getArtistImageByDimension,
  getDocumentScrollBottom,
  removeDuplicates,
  sleep,
  SpotifyClient,
} from 'utils'

import styles from './Artist.module.scss'

const LOADING_ALBUMS_AMOUNT = 10
const SCROLL_BOTTOM_THRESHOLD = 100

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
  }

  state = {
    page: 0,
    pages: 0,
    artist: null,
    albums: [],
    totalAlbums: 0,
    isLoading: true,
  }

  componentDidMount = async () => {
    try {
      window.addEventListener('scroll', this.handleScroll)

      const { id } = this.props.match.params
      const [artistResponse, albumsResponse] = await Promise.all([
        this.client.getArtistById(id),
        this.client.getArtistAlbumsById(id),
      ])

      const artist = {
        ...artistResponse,
        image: getArtistImageByDimension(artistResponse.images, 192, 600)?.url,
      }
      const albums = albumsResponse.items.map(album => ({
        ...album,
        image: getArtistImageByDimension(album.images, 80, 400)?.url,
      }))

      this.setState(state => ({
        ...state,
        page: albumsResponse.page,
        pages: albumsResponse.pages,
        artist,
        albums,
        totalAlbums: albumsResponse.total,
        isLoading: false,
      }))
    } catch (err) {
      if (err instanceof ClientError && err.status === 401) {
        this.sendUserToSignIn()
      }

      this.setState(state => ({ ...state, isLoading: false }))
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  client = new SpotifyClient()

  sendUserToSignIn = () => {
    clearToken()
    window.location.reload()
  }

  handleScroll = async () => {
    try {
      const reachThreshold =
        getDocumentScrollBottom() <= SCROLL_BOTTOM_THRESHOLD

      const { isLoading, page, pages } = this.state
      const hasPagesToLoad = page < pages

      if (isLoading || !hasPagesToLoad || !reachThreshold) return

      this.setState(state => ({ ...state, isLoading: true }))

      await sleep(500) // prevent too many consecutive requests

      const { id } = this.props.match.params

      const response = await this.client.getArtistAlbumsById(id, {
        page: this.state.page + 1,
      })

      const albums = response.items.map(album => ({
        ...album,
        image: getArtistImageByDimension(album.images, 80, 400)?.url,
      }))

      this.setState(state => ({
        ...state,
        page: response.page,
        pages: response.pages,
        totalAlbums: response.total,
        albums: removeDuplicates(
          [...state.albums, ...albums],
          album => album.id,
        ),
        isLoading: false,
      }))
    } catch (err) {
      if (err instanceof ClientError && err.status === 401) {
        this.sendUserToSignIn()
      }

      this.setState(state => ({ ...state, isLoading: false }))
    }
  }

  render = () => {
    const messageCategory =
      this.state.isLoading || this.state.albums.length ? '' : 'album-not-found'

    return (
      <Layout>
        <div className={styles.wrapper}>
          <ArtistDetailedCard
            artist={this.state.artist}
            show={!!this.state.artist}
          />
          <EmptyListMessage category={messageCategory} />
          <AlbumsList
            albums={this.state.albums}
            total={this.state.totalAlbums}
            show={!!this.state.albums?.length}
          />
          <LoadingArtistDetailedCard
            show={!this.state.page && this.state.isLoading}
          />
          <LoadingAlbumsList
            show={!this.state.page && this.state.isLoading}
            albumsAmount={LOADING_ALBUMS_AMOUNT}
          />
          <Loading
            show={!!this.state.page && this.state.isLoading}
            style={{ marginTop: '2rem' }}
          />
        </div>
      </Layout>
    )
  }
}

export default Artist
