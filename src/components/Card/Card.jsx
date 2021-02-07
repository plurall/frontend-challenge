import PropTypes from 'prop-types'
import React from 'react'

import styles from './Card.module.css'

export default function Card({ children, img, alt }) {
  if (!img && !alt && !children) return <></>

  return (
    <div className={styles.card} data-testid="card">
      <div className={styles.header}>
        <img className={styles.img} src={img} alt={alt} />
      </div>
      {children && <div className={styles.body}>{children}</div>}
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
}
