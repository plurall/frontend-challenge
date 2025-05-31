import React from 'react'
import * as styles from '../Artista.module.scss'

const Popularity: React.FC<{ popularity: number }> = ({ popularity }) => {
  return (
    <div className={styles.popularityContainer}>
      <span className={styles.popularityLabel}>Popularidade:</span>
      <div className={styles.popularityBar}>
        <div className={styles.popularityFill} style={{ width: `${popularity || 0}%` }} />
      </div>
      <span className={styles.popularityValue}>{popularity || 0}%</span>
    </div>
  )
}

export default Popularity
