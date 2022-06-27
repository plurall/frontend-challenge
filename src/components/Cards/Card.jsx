import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Card.module.css'

const Card = ({ artist }) => (
  <div>
    <div key={artist.id} className={styles.class}>
      <Link className={styles.link} to={`/artista/${artist.id}`}>
        <img className={styles.img} alt={artist.name} src={artist.images[0]?.url} />
        <div className={styles.name}>
          {artist.name}
        </div>
      </Link>
    </div>
  </div>
)

Card.propTypes = {
  artist: PropTypes.object.isRequired,
}

export default Card
