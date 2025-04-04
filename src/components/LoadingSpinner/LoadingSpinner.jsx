import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoadingSpinner.module.scss'

const LoadingSpinner = ({ size, message, overlay }) => (
  <div className={overlay ? styles.spinnerOverlay : ''}>
    <div
      className={styles.spinner}
      style={{ width: size, height: size }}
    >
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
    {message && <p className={styles.message}>{message}</p>}
  </div>
  )

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  message: PropTypes.string,
  overlay: PropTypes.bool,
}

LoadingSpinner.defaultProps = {
  size: '60px',
  message: '',
  overlay: false,
}

export default LoadingSpinner
