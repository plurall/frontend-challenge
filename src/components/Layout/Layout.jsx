import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken } from 'utils'

import styles from './Layout.module.scss'

function handleLogout(path) {
  setToken('')
  window.location = path
}

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.navBar}>
        <NavBar
          data={{
            menu: { items: [{ name: 'Início', slug: 'account', id: 0, href: '/' }] },
          }}
          logout={handleLogout}
          service="reader"
          userToken={getToken()}
        />
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
