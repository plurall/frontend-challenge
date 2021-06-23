import React from 'react'
import PropTypes from 'prop-types'

import styles from './ContentPage.module.css'

const ContentPage = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)

export default ContentPage

ContentPage.propTypes = {
  children: PropTypes.node.isRequired,
}
