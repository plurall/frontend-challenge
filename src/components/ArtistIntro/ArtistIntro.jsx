import PropTypes from 'prop-types'
import React from 'react'

import styles from './ArtistIntro.module.css'

export default function ArtistIntro({ artist }) {
  if (!artist)
    return <div className="artist-not-found">O artista não foi encontrado.</div>

  return (
    <div className={styles.artistIntro} data-testid="artist-intro">
      <div className={styles.avatar}>
        <img
          alt={`Foto do artista ${artist.name}`}
          src={artist.photograph}
          className={styles.photograph}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{artist.name}</span>
        <span className={styles.popularity}>
          Popularidade: {artist.popularity}
        </span>
        <span className={styles.genres}>
          Gêneros: {artist.genres.join(', ')}
        </span>
      </div>
    </div>
  )
}

ArtistIntro.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    photograph: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
}
