import React, { Component } from 'react'

import styles from './ArtistCard.module.css'

class ArtistCard extends Component {
  render() {
    const { artist } = this.props

    return (
      <div className={styles.detailsSection}>
        <img
          src={artist.images[0].url}
          alt="Foto do artista"
          className={styles.artistImage}
        />
        <div className={styles.detailsText}>
          <span className={styles.text} id={styles.nameText}>
            {artist.name}
          </span>
          <br />
          <span className={styles.text}>
            <b>Popularidade:</b> {artist.popularity}
          </span>
          <br />
          <span className={styles.text}>
            <b>Generos:</b> &nbsp;
            {artist.genres.map((gender, i) => (
              <span key={i} id={styles.genderText}>
                {gender},
              </span>
            ))}
          </span>
          <br />
        </div>
      </div>
    )
  }
}

export default ArtistCard
