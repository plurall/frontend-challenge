import React from 'react'
import PropTypes from 'prop-types'

import { albumType } from 'types'
import { AlbumCard } from 'components'

import styles from './AlbumsList.module.scss'

const AlbumsList = ({ albums, total, show }) =>
  show && (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Álbums</h2>
        <p className={styles.totalCount}>{total} álbums relacionados</p>
      </div>
      <ul className={styles.list}>
        {albums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </ul>
    </div>
  )

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(albumType).isRequired,
  total: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
}

export default AlbumsList
