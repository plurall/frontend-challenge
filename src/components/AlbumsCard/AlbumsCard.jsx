import React, { Component } from 'react'
import { convertDate } from 'utils/common'

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
              <span>{convertDate(album.release_date)}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default AlbumsCard
