import React from 'react'

import styles from './LoadingArtistSmallCard.module.scss'

const LoadingArtistSmallCard = () => (
  <div className={styles.wrapper}>
    <div className={styles.name} />
    <div className={styles.popularity} />
    <div className={styles.picture} />
  </div>
)

export default LoadingArtistSmallCard
