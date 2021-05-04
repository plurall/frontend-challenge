import PropTypes from 'prop-types'
import React from 'react'

import styles from './ArtistDescription.module.css'

const ArtistDescription = ({ artist, className }) => {
  const { name, popularity, images, genres } = artist || {}

  let imageUrl =
    'https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg'

  if (images != null) {
    if (images.length > 0) {
      imageUrl = images[0].url
    }
  }

  return (
    <div className={className}>
      <div className={`${styles.header} ${styles.marginBottom}`}>
        <img src={imageUrl} alt={name} className={styles.headerImage} />
      </div>
      <div className={styles.description}>
        <h1 className={styles.marginBottom2}>{name}</h1>
        <p>Popularidade: {popularity}</p>
        <p>Gêneros: {genres.join(', ')}</p>
      </div>
    </div>
  )
}

ArtistDescription.propTypes = {
  artist: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default ArtistDescription
