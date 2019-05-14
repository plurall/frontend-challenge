import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Heading } from '@plurall/elo'

import styles from './ArtistsList.module.css'

const ArtistsList = ({ artists }) => (
  <ul className={styles.list}>
    {artists.map(artist => (
      <li key={artist.id} className={styles.item}>
        <Link to={`/artist/${artist.id}/`} className={styles.link}>
          <div className={styles.artist}>
            {artist.images && artist.images.length ? (
              <img
                className={styles.image}
                src={artist.images[0].url}
                alt={artist.name}
              />
            ) : (
              null
            )}
            <Heading size="small">{artist.name}</Heading>
          </div>
        </Link>
      </li>
    ))}
  </ul>
)

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
}

export default ArtistsList
