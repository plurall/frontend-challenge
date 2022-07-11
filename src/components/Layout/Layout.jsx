import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from 'components'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
