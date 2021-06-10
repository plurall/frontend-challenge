import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Card.module.css'

const Card = ({ id, name, image, genres }) => (
  <Link to={`/artist/${id}`}>
    <div className={styles.cardArtist}>
      <h3 aria-label="Name of artist" className={styles.artistTitle}>{name}</h3>
      <h4
        aria-label="Genres musical of artist"
        className={styles.artistSubTitle}
      >
        {genres.length === 0
              ? 'Genero musical indefinido'
              : genres.join(', ')}
      </h4>

      <div className={styles.artistAvatar}>
        <img
          src={image}
          alt={name}
          aria-label={`Album of artist ${name}`}
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  </Link>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  genres: PropTypes.array,
}

export default Card
