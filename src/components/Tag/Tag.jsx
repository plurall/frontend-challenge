import PropTypes from 'prop-types'
import React from 'react'

import styles from './Tag.module.css'

const Tag = ({ tagName }) => (
  <li className={styles['c-tag__item']}>
    {tagName}
  </li>
)

Tag.propTypes = {
  tagName: PropTypes.string,
}

export default Tag
