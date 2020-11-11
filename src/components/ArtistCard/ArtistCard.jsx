import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ArtistCard.module.css'

const ArtistCard = ({ name, images, id }) => (
  <div className={styles.item}>
    <Link to={`/artista/${id}`}>
      {images.length > 0 
        ? <img alt={name} width="64" src={images[0].url} /> 
        : <img alt={name} width="64" src="https://via.placeholder.com/64" />
      }
      <div className={styles.artistName}>{name}</div>
    </Link>
  </div>
)

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.array,
}

export default ArtistCard
