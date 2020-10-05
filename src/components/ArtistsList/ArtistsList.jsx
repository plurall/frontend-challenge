import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './ArtistsList.module.css'

class ArtistsList extends Component {
  async onSelectArtist(id) {
    this.props.history.push(`/artist/${id}`)
  }

  render() {
    const { artists, loading } = this.props

    return (
      <div
        className={styles.artistContainer}
        style={{
          visibility: !loading ? 'visible' : 'hidden',
          opacity: !loading ? 1 : 0,
        }}
      >
        {artists.length > 0 &&
          artists.map(art => (
            <div
              className={styles.artistItem}
              key={art.id}
              onClick={() => this.onSelectArtist(art.id)}
            >
              <div className={styles.photoContainer}>
                {art.images.length > 0 && (
                  <img
                    src={art.images[0].url}
                    className={styles.photoArtist}
                    alt="Foto do artista"
                  />
                )}{' '}
                <br />
              </div>
              <div className={styles.nameSection}>
                <span className={styles.artistName}>{art.name}</span>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default withRouter(ArtistsList)
