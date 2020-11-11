import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment';

import styles from './AlbumCard.module.css'

const AlbumCard = ({ name, images, releaseDate }) => (
  <div className={styles.albumInfo}>
    <img className={styles.albumPhoto} width="100%" src={images && images.length > 0 && images[0].url} alt={name}/>
    <h3 title={name} className={styles.albumName}>{name}</h3>
    <h4 data-test="releaseDate" className={styles.albumDate}>{ moment(releaseDate).format("DD/MM/YYYY")}</h4>
  </div>
)

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  images: PropTypes.array,
}

export default AlbumCard
