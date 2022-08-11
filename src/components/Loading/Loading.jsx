import React from 'react'
import PropTypes from 'prop-types'

import styles from './Loading.module.scss'

const Loading = ({ show, ...rest }) =>
  show && (
    <div className={styles.wrapper} {...rest}>
      <span className={styles.circle} />
      <span className={styles.circle} />
      <span className={styles.circle} />
      <span className={styles.circle} />
    </div>
  )

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Loading
