import React from 'react'
import PropTypes from 'prop-types'

import { ArtistDetailedCard, Layout } from 'components'
import {
  clearToken,
  ClientError,
  getArtistImageByDimension,
  SpotifyClient,
} from 'utils'

import styles from './Artist.module.scss'

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
  }

  state = { artist: null, albums: [], totalAlbums: 0 }

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

      const totalAlbums = albumsResponse.total

      this.setState({ ...this.state, artist, albums, totalAlbums })
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

  render = () => (
    <Layout>
      {!!this.state.artist && (
        <div className={styles.wrapper}>
          <ArtistDetailedCard artist={this.state.artist} />
        </div>
      )}
    </Layout>
  )
}

export default Artist
