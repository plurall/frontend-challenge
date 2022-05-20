import React from 'react'
import styles from './AlbumTable.module.css'

const AlbumTable = ({ album }) => {
  return (
    <>
      <div className={styles.item} key={album.id}>
        <div className={styles.imgs}>
          {album.images.length && (
            <img
              src={album.images[0].url}
              alt={album.name}
              width="200px"
              height="200px"
            />
          )}
        </div>
        <div className={styles.albumName}>{album.name}</div>
        <span className={styles.albumDate}>
          {new Date(album.release_date).toLocaleString('pt-br', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </span>
      </div>
    </>
  )
}

export default AlbumTable
