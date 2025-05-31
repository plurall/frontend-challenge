import React from 'react'
import * as styles from '../Artista.module.scss'
import { IAlbumAlbum } from 'interfaces'

const Albuns: React.FC<{ albuns: IAlbumAlbum[] }> = ({ albuns }) => {
  if (albuns.length === 0) return null

  const formatReleaseDate = (date: string): string => {
    return new Date(date).toLocaleDateString('pt-BR')
  }
  return (
    <div className={styles.albunsSection}>
      <h2 className={styles.albunsTitle}>Álbuns</h2>
      <div className={styles.albunsGrid}>
        {albuns.length > 0 &&
          albuns.map(album => (
            <div key={album.name} className={styles.albumCard}>
              <img src={album.images[0]?.url} alt={album.name} className={styles.albumImage} />
              <div className={styles.albumInfo}>
                <h3 className={styles.albumName}>{album.name}</h3>
                <p className={styles.albumDate}>{formatReleaseDate(album.release_date)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Albuns
