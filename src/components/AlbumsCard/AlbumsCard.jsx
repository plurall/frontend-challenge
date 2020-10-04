import React, { Component } from 'react'

import styles from './AlbumsCard.module.css'

class AlbumsCard extends Component {
  state = {
    opacity: '0',
  }

  onShowDetailsAlbum() {
    console.log(this.state.opacity)
  }
  onHiddenDetailsAlbum() {
    this.setState({ opacity: '0' })
  }

  render() {
    const { albums } = this.props
    const { opacity } = this.state

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
            <div
              className={styles.detailsAlbum}
              onMouseEnter={() => this.onShowDetailsAlbum()}
              onMouseLeave={() => this.onHiddenDetailsAlbum()}
              style={{ opacity }}
            >
              <span>{album.name}</span>
              <br />
              <span>{album.release_date}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default AlbumsCard
