import React from 'react'
import PropTypes from 'prop-types'

import styles from './AlbumsCard.module.css'

const AlbumsCard = ({ album }) => (
  <div className={styles.albumCard}>
    <img src={album.image} alt={`${album.name}-album`} />
    <div className={styles.albumInfo}>
      <p>{album.name}</p>
      <span>{album.formattedDate}</span>
    </div>
  </div>
)

export default AlbumsCard

AlbumsCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    formattedDate: PropTypes.string,
  }),
}
