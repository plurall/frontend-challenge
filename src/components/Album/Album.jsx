import React from 'react'
import PropTypes from 'prop-types'

import styles from './Album.module.css'

const Album = ({ image, name, releaseDate }) => (
  <li
    className={styles.wrapper}
    aria-label={`Information from album ${name}`}
  >
    <div className={styles.wrapperImg}>
      <img
        src={image}
        alt={name}
        aria-label={`Album ${name}`}
        decoding="async"
        loading="lazy"
      />
    </div>
    <h3 aria-label="Name of album">{name}</h3>
    <span role="contentinfo" aria-label="Release date of album">
      {new Date(releaseDate).toLocaleDateString('pt-BR')}
    </span>
  </li>
)

Album.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  releaseDate: PropTypes.any.isRequired,
}

export default Album
