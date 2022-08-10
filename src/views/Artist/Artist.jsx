import React from 'react'
import PropTypes from 'prop-types'

import {
  AlbumsList,
  ArtistDetailedCard,
  Layout,
  EmptyListMessage,
  LoadingArtistDetailedCard,
  LoadingAlbumsList,
} from 'components'
import {
  clearToken,
  ClientError,
  getArtistImageByDimension,
  SpotifyClient,
} from 'utils'

import styles from './Artist.module.scss'

const LOADING_ALBUMS_AMOUNT = 10

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
  }

  state = {
    artist: null,
    albums: [],
    totalAlbums: 0,
    isLoading: true,
  }

  componentDidMount = async () => {
    try {
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
        artist,
        albums,
        totalAlbums: albumsResponse.total,
        isLoading: false,
      }))
    } catch (err) {
      if (err instanceof ClientError && err.status === 401) {
        this.sendUserToSignIn()
      }
    }
  }

  client = new SpotifyClient()

  sendUserToSignIn = () => {
    clearToken()
    window.location.reload()
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
          <LoadingArtistDetailedCard show={this.state.isLoading} />
          <LoadingAlbumsList
            show={this.state.isLoading}
            albumsAmount={LOADING_ALBUMS_AMOUNT}
          />
        </div>
      </Layout>
    )
  }
}

export default Artist
