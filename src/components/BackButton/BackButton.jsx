import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './BackButton.module.scss'

const BackButton = ({ to, children }) => {
  return (
    <Link to={to} className={styles.backButton}>
      ← {children}
    </Link>
  )
}

export default BackButton