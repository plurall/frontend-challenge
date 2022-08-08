/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React from 'react'

import { SubHeader } from 'components'
import { formatDate, SomosClient } from 'utils'

import styles from './Artist.module.scss'

class Artist extends React.Component {
  state = {
    albums: [],
    artist: null,
  }

  client = new SomosClient()

  async getArtistInfo(id) {
    const response = await this.client.getArtistById(id)
    this.setState({
      artist: response,
    })
    console.log(response)
  }

  async getArtistAlbums(id) {
    const response = await this.client.getArtistAlbums(id)
    this.setState({
      albums: response.items?.slice(0, 10),
    })
    console.log(response)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      this.getArtistInfo(id)
      this.getArtistAlbums(id)
    }
  }

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home', href: '/' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>
          <div className={styles.artistInfo}>
            <div className={styles.artistImage}>
              <img src={this.state.artist?.images[0]?.url} alt="rrrr" />
            </div>
            <div className={styles.artistContent}>
              <h1>{this.state.artist?.name}</h1>
              <p>Popularidade: {this.state.artist?.popularity}</p>
              <p>
                Gêneros:{' '}
                {this.state.artist?.genres?.map(item => item).join(', ')}
              </p>
            </div>
          </div>
          <h2>ÁLBUNS</h2>
          <div className={styles.albums}>
            {this.state.albums?.map(album => (
              <div className={styles.cardAlbum}>
                <div className={styles.cardImage}>
                  <img src={album?.images[1]?.url} alt="rrrr" />
                </div>
                <div className={styles.cardContent}>
                  <h3>{album?.name}</h3>
                  <p>{formatDate(album?.release_date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Artist
