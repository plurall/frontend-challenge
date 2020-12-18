import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

const Button = ({ href, text }) => (
  <Link to={href} className={styles['c-btn']}>{text}</Link>
)

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}

export default Button
