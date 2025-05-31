import React from 'react'
import * as styles from './Loading.module.scss'

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <p className={styles.loadingText}>Carregando...</p>
    </div>
  )
}

export default Loading
