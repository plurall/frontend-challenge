import React from 'react'
import NavBar from 'plurall-header'

import { getToken, setToken } from 'utils'

import styles from './Header.module.scss'

function handleLogout(path) {
  setToken('')
  window.location = path
}

const Header = () => {
  return (
    <header className={styles.navBar}>
      <NavBar
        data={{
            menu: { items: [{ name: 'Início', slug: 'account', id: 0, href: '/' }] },
          }}
        logout={handleLogout}
        service="reader"
        userToken={getToken()}
      />
    </header>
  )
}

Header.propTypes = {}

export default Header
