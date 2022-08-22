import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken } from 'utils'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const handleLogout = path => {
    setToken('')
    window.location = path
  }
  const { content, footer, 'nav-bar': navBar } = styles

  return (
    <>
      <div className={navBar}>
        <NavBar
          data={{
            menu: { items: [{ name: 'Início', slug: 'account', id: 0 }] },
          }}
          logout={handleLogout}
          service="reader"
          userToken={getToken()}
        />
      </div>

      <div className={content}>{children}</div>

      <div className={footer}>
        <Footer />
      </div>
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
