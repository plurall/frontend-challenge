import React from 'react'
import PropTypes from 'prop-types'

import styles from './LoadingArtistDetailedCard.module.scss'

const LoadingArtistDetailedCard = ({ show }) =>
  show && (
    <div className={styles.wrapper}>
      <div className={styles.name} />
      <div className={styles.popularity} />
      <div className={styles.genres} />
      <div className={styles.picture} />
    </div>
  )

LoadingArtistDetailedCard.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default LoadingArtistDetailedCard
