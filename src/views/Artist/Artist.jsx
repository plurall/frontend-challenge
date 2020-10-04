import React, { Component } from 'react'

import { Layout } from 'components'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'
import ArtistCard from 'components/ArtistCard/ArtistCard'

class Artist extends Component {
  state = {
    artist: undefined,
    albums: [],
    loading: null,
    error: {},
    opacity: 0,
    transition: '',
    visibility: 'hidden',
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

  onShowDetailsAlbum() {
    this.setState({ opacity: '0.7' })
  }
  onHiddenDetailsAlbum() {
    this.setState({ opacity: '0' })
  }

  render() {
    const { artist, albums, opacity, loading, error } = this.state

    return (
      <React.Fragment>
        <Layout>
          <SubHeader
            breadcrumb={[{ text: 'SearchArtists' }]}
            heading="Somos Front-end Challange"
          />
          <div className={styles.wrapper}>
            {artist !== undefined && (
              <div className={styles.container}>
                <ArtistCard artist={artist} />
                <div style={{ width: '100%' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      paddingBottom: 15,
                      width: '100%',
                    }}
                  >
                    Albuns:
                    <hr style={{ width: '100%', border: '1px solid #ddd' }} />
                  </span>
                  <br />
                  <div className={styles.albumsSection}>
                    {albums.map(album => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                        }}
                      >
                        <div className={styles.photoAlbumContainer}>
                          <img
                            src={album.images[0].url}
                            className={styles.photoAlbum}
                            alt="Foto do album"
                          />
                        </div>
                        <div
                          className={styles.detailsAlbum}
                          onMouseEnter={() => this.onShowDetailsAlbum()}
                          onMouseLeave={() => this.onHiddenDetailsAlbum()}
                          style={{ opacity }}
                        >
                          <span>{album.name}</span>
                          <br />
                          <span>{album.release_date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
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
