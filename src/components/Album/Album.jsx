import React from 'react'

import styles from './Album.module.scss'

const Album = () => {
  return (
    <div className={styles.container}>
      <img src="https://source.unsplash.com/random" alt="Album" />
      <p>Nome do Álbum</p>
      <small>Data de lançamento</small>
    </div>
  )
}

export default Album
