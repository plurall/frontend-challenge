import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './LinkButton.module.css'

const LinkButton = ({ buttonHref, children }) => (
  <Link to={buttonHref} className={styles.button}>
    {children}
  </Link>
)

LinkButton.propTypes = {
  buttonHref: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default LinkButton
