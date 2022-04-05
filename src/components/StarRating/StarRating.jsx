import React from 'react'
import styles from './StarRating.module.css'
import PropTypes from 'prop-types'

function StarRating({ rating }) {
    let _rating = Math.round((rating * 5) / 100);
    return (
        <span className={styles.starsSelected}>{String().padStart(_rating, '★')}
            <span className={styles.starsEmpty}>{String().padStart(5 - _rating, '★')}</span>
        </span>
    )
}

StarRating.propTypes = {
    name: PropTypes.number
}

export default StarRating