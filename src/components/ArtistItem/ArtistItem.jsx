import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ArtistItem.module.css'

const ArtistItem = ({ item }) => {
  const imageUrl =
    item.images.length > 0
      ? item.images[0].url
      : 'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

  return (
    <Link to={`/artista/${item.id}`} key={item.id} className={styles.item}>
        <img src={imageUrl} alt={item.name} className={styles.image} />
        <p>{item.name}</p>
    </Link>
  )
}

ArtistItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ArtistItem
