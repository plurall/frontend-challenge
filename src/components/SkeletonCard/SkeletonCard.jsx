import React from 'react'
import PropTypes from 'prop-types'
import styles from './SkeletonCard.module.scss'

const SkeletonCard = ({ type }) => {
  if (type === 'artist') {
    return (
      <div className={styles.artistSkeleton}>
        <div className={styles.imageSkeleton} />
        <div className={styles.nameSkeleton} />
      </div>
    )
  }

  if (type === 'album') {
    return (
      <div className={styles.albumSkeleton}>
        <div className={styles.albumImageSkeleton} />
        <div className={styles.albumContent}>
          <div className={styles.titleSkeleton} />
          <div className={styles.dateSkeleton} />
        </div>
      </div>
    )
  }

  return null
}

SkeletonCard.propTypes = {
  type: PropTypes.oneOf(['artist', 'album']).isRequired,
}

export default SkeletonCard
