import React from 'react'
import PropTypes from 'prop-types'

import styles from './Spin.module.css'

const Spin = ({ spinning, children }) => {
  if (!spinning) {
    return children
  }

  return (
    <div data-testid="spin-container" className={styles.spinContainer}>
      <div className={styles.spin} />
    </div>
  )
}

export default Spin

Spin.propTypes = {
  spinning: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
