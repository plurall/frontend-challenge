import React from 'react'
import styles from './CardAlbum.module.css'
function CardAlbum({ artistAlbumDate }) {
  return (
    <div>
      <h2 className={styles.title}>Albums</h2>
      <div className={styles.content}>
        {artistAlbumDate.map(item => (
          <div className={styles.contentAlbum} key={item.id}>
            <img
              className={styles.imgArtist}
              src={item.image}
              alt={`a foto do artista ${item.name}`}
            />
            <div className={styles.textContent}>
              <p className={styles.nameArtist}>{item.name}</p>
              <p className={styles.releaseDate}>
                lançamento: {item.releaseDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardAlbum
