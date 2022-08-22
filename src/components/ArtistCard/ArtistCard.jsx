import React from 'react'

import PropTypes from 'prop-types'

import styles from './ArtistCard.module.scss'

const ArtistCard = ({ image, name, type, handleClick }) => {
  const {
    wrapper,
    avatar,
    'text-wrapper': textWrapper,
    'type-text': typeText,
  } = styles

  return (
    <div onClick={() => handleClick()} className={wrapper}>
      <img
        className={avatar}
        src={image}
        alt="artist"
      />
      <div className={textWrapper}>
        <span>
          {name}
        </span>
        <span className={typeText}>
          {type}
        </span>
      </div>
    </div>
  )
}

ArtistCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}


export default ArtistCard
