import React from 'react'
import styles from './DetailsArtist.module.css'

const DetailsArtist = (artist, albums) => {
    return (
      <div className={styles.details}>
        <div className={styles.imageBG}>
          <img
            src={artist.images[0].url}
            alt={artist.name}
            className={styles.imageBG}
          />
        </div>
        <p className={styles.name}>{artist.name}</p>
        <p className={styles.popularity}>Popularidade: {artist.popularity}</p>
        <p className={styles.followers}>{artist.followers.total} ouvintes mensais</p>

        <p className={styles.title}>Gêneros</p>
        <div className={styles.genres}>
          {artist.genres.map((genre, index) => <p className={styles.genre} key={genre[index]} >{genre}</p>)}
        </div>
        <p className={styles.title}>Álbums</p>
        <div className={styles.albums}>
          {albums.map((album) => (
            <div className={styles.album} key={album.name}>
              <img className={styles.albumImage} src={album.images[2].url} alt={album.name} />
              <p className={styles.albumName}>{album.name}</p>
              <p className={styles.albumDate}>{album.release_date.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default DetailsArtist