/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'

import { LoadingAlbumCard } from 'components'
import styles from './LoadingAlbumsList.module.scss'

const LoadingAlbumsList = ({ show, albumsAmount }) =>
  show && (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Álbums</h2>
      </div>
      <ul className={styles.list}>
        {[...Array(albumsAmount).keys()].map((_, i) => (
          <LoadingAlbumCard key={i} />
        ))}
      </ul>
    </div>
  )

LoadingAlbumsList.propTypes = {
  show: PropTypes.bool.isRequired,
  albumsAmount: PropTypes.number.isRequired,
}

export default LoadingAlbumsList
