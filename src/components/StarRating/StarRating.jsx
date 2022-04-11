import React from 'react'
import PropTypes from 'prop-types'
import styles from './StarRating.module.css'

const StarRating = ({ rating }) => {
  const ratingValue = Math.round((rating * 5) / 100)
  return (
    <span className={styles.starsSelected}>
      {String().padStart(ratingValue, '★')}
      <span className={styles.starsEmpty}>
        {String().padStart(5 - ratingValue, '★')}
      </span>
    </span>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number,
}

export default StarRating
