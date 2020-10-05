import React, { Component } from 'react'

import { Layout } from 'components'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'
import ArtistCard from 'components/ArtistCard/ArtistCard'
import AlbumsCard from 'components/AlbumsCard/AlbumsCard'
import Loading from 'components/Loading/Loading'

class Artist extends Component {
  state = {
    artist: undefined,
    albums: [],
    loading: null,
    error: {},
  }

  client = new SomosClient()

  componentDidMount() {
    const id = this.props.match.params.id

    this.getArtist(id)
    this.getAlbums(id)
  }

  async getArtist(id) {
    const res = await this.client.getArtistById(id)
    if (res.artist !== undefined) {
      this.setState({ artist: res.artist, loading: false })
    } else {
      this.setState({ error: res.error, loading: false })
    }
  }

  async getAlbums(id) {
    const res = await this.client.getAlbums(id)
    if (res.albums !== undefined)
      this.setState({ albums: res.albums, loading: false })
    else {
      this.setState({ error: res.error, loading: false })
    }
  }

  render() {
    const { artist, albums, loading } = this.state

    return (
      <React.Fragment>
        <Layout>
          <SubHeader
            breadcrumb={[{ text: 'SearchArtists' }]}
            heading="Somos Front-end Challange"
          />
          <div className={styles.wrapper}>
            <Loading loading={loading} />

            {artist !== undefined && (
              <div className={styles.container}>
                <ArtistCard artist={artist} />

                <div style={{ width: '100%' }}>
                  <span className={styles.albumsText}>Albuns:</span>
                  <hr className={styles.line} />
                  <br />
                  <AlbumsCard albums={albums} />
                </div>
              </div>
            )}
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

export default Artist
