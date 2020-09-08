import React from 'react'
import PropTypes from 'prop-types'

import styles from './Artist.module.css'

import defaultAlbumImg from '../../assets/img/default-album.png'

class ArtistAlbumItem extends React.Component {
  static propTypes = {
    album: PropTypes.object,
  }

  render() {
    const {
      props: { album },
    } = this

    return (
      <>
        <div className={styles.item} key={album.id}>
          <div className={styles.photo}>
            {album.images.length > 0 ? (
              <img src={album.images[0].url} alt={album.name} />
            ) : (
                <img src={defaultAlbumImg} alt={album.name} />
              )}
          </div>
          <div className={styles.albumName}>{album.name}</div>
          <span className={styles.albumReleaseDate}>
            {new Intl.DateTimeFormat('pt-BR', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
            }).format(new Date(album.release_date))}
          </span>
        </div>
      </>
    )
  }
}

export default ArtistAlbumItem
