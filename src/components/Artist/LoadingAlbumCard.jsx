import React from 'react'

import styles from './LoadingAlbumCard.module.scss'

const LoadingAlbumCard = () => (
  <div className={styles.wrapper}>
    <div className={styles.name} />
    <div className={styles.details} />
    <div className={styles.button} />
    <div className={styles.picture} />
  </div>
)

export default LoadingAlbumCard
