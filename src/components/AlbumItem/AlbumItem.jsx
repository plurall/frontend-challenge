import PropTypes from 'prop-types'
import React from 'react'
import { dateConvert } from 'utils/date'

import styles from './AlbumItem.module.css'

const AlbumItem = ({ item }) => {
  const imageUrl =
    item.images.length > 0
      ? item.images[0].url
      : 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

  return (
    <div key={item.id} className={styles.marginRight}>
      <img src={imageUrl} alt={item.name} className={styles.image} />
      <p>{item.name}</p>
      <p>{dateConvert(item.release_date)}</p>
    </div>
  )
}

AlbumItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default AlbumItem
