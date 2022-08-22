import React from 'react'

import PropTypes from 'prop-types'

import styles from './AlbumCard.module.scss'

const AlbumCard = ({ image, name, releaseDate }) => {
  const {
    wrapper,
    'album-logo': albumLogo,
    'info-wrapper': infoWrapper,
    'album-title': albumTitle,
    'album-release-date': albumRelesaeDate,
  } = styles

  return (
    <div className={wrapper}>
      <img
        src={image}
        alt="album"
        className={albumLogo}
      />
      <div className={infoWrapper}>
        <span className={albumTitle}>{name}</span>
        <p className={albumRelesaeDate}>{releaseDate}</p>
      </div>
    </div>
  )
}

export default AlbumCard

AlbumCard.defaultProps = {
  image: 'Indisponível',
  name: 'Indisponível',
  releaseDate: 'Indisponível',
}

AlbumCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  releaseDate: PropTypes.string,
}
