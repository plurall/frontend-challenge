import React from 'react'

import { Footer as PlurallFooter } from 'plurall-footer'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <PlurallFooter />
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
