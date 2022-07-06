import React from 'react'
import PropTypes from 'prop-types'

import styles from './ArtistCard.module.scss'

const ArtistCard = ({ artist }) => {
  return (
    <a href="/" className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={artist.images[0]?.url} alt={artist.name} />
      </div>
      <div className={styles.cardBody}>
        <p>{artist.name}</p>
      </div>
    </a>
    )
}

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }).isRequired,
}

export default ArtistCard
