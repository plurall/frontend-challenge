import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ImagePlaceholder } from 'components'

import styles from './ArtistCard.module.scss'

const ArtistCard = ({ artist }) => {
  const { id, name, images } = artist
  const imageUrl = images[0]?.url

  return (
    <Link to={`/artista/${id}`} className={styles.card}>
      <div className={styles.cardHeader}>
        {imageUrl && <img src={imageUrl} alt={name} />}
        {!imageUrl && <ImagePlaceholder />}
      </div>
      <div className={styles.cardBody}>
        <p>{name}</p>
      </div>
    </Link>
    )
}

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }).isRequired,
}

export default ArtistCard
