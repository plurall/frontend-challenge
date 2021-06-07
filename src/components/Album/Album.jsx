import React from 'react'

import styles from './Album.module.css'

const Album = ({ album }) => {
  const { images, name, release_date } = album;

  const imageSrc = images[0] ? images[0].url : '';

  return (
    <div className={styles.singleAlbum} data-testid="album">
      <div className={styles.nameDate} data-testid="name-date">
        <h3>{name}</h3>
        <h4>{release_date}</h4>
      </div>
      <img 
        src={imageSrc} 
        className={styles.albumImage} 
        alt={`${name}-album`} 
      />
    </div>
  )
}

export default Album
