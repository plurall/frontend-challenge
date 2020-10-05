import React, { Component } from 'react'

import styles from './AlbumsCard.module.css'

class AlbumsCard extends Component {
  render() {
    const { albums } = this.props

    return (
      <div className={styles.wrapper}>
        {albums.map(album => (
          <div className={styles.container} key={album.id}>
            <div className={styles.photoAlbumContainer}>
              <img
                src={album.images[0].url}
                className={styles.photoAlbum}
                alt="Foto do album"
              />
            </div>
            <div className={styles.detailsAlbum}>
              <span className={styles.albumName}>{album.name}</span>
              <br />
              <span>
                {album.release_date
                  .split('-')
                  .reverse()
                  .join('/')}
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default AlbumsCard
