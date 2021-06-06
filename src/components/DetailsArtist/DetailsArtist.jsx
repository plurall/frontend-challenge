import React from 'react'
import styles from './DetailsArtist.module.css'

function DetailsArtist({ artistDate }) {
  const { name, image, genre = [], popularity } = artistDate
  return (
    <div className={styles.contentDetails}>
      <img
        className={styles.imgArtist}
        src={image}
        alt={`a foto do artista ${name}`}
      />

      <div>
        <p className={styles.nameArtist}>
          {name} <span className={styles.popularityArtist}>{popularity}</span>
        </p>
        <div className={styles.contentGenre}>
          {genre.map((item, index) => (
            <span className={styles.genre} key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailsArtist
