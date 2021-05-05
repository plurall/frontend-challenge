import AlbumItem from 'components/AlbumItem/AlbumItem'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './AlbumList.module.css'

const AlbumList = ({ data }) => (
  <div className={styles.list}>
    {data.map(album => (
      <AlbumItem item={album} key={album.id} />
      ))}
  </div>
  )

AlbumList.propTypes = {
  data: PropTypes.array,
}

export default AlbumList
