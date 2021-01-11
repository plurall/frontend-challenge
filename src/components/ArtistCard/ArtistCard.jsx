import PropTypes from 'prop-types'
import React from 'react'
import { Link } from '@reach/router'

import styles from './ArtistCard.module.css'

import musician from './musician.svg'

const ArtistCard = ({ spotifyId, imageSrc, name }) => (
  <Link to={`/artista/${spotifyId}`}>
    <div className={styles.wrapper}>
      <img src={imageSrc !== '' ? imageSrc : musician} alt={`Foto de ${name}`} />
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  </Link>
)

ArtistCard.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  spotifyId: PropTypes.string.isRequired,
}

export default ArtistCard
