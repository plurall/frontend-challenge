import React from 'react'

import styles from './ArtistCard.module.scss'

const ArtistCard = () => (
  <a href="/" className={styles.card}>
    <div className={styles.cardHeader}>
      <img src="https://source.unsplash.com/random" alt="Artista" />
    </div>
    <div className={styles.cardBody}>
      <p>Nome do artista</p>
    </div>
  </a>
)

export default ArtistCard
