import React from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken } from 'utils'

import {
  content,
  footer,
  nav_bar as navBar
} from './Layout.module.css'

const Layout = ({children}) => {
  const handleLogout = (path) => {
    setToken('')
    window.location = path
  }

  return (
    <>
      <div className={navBar}>
        <NavBar
          data={{
            menu: { items: [
              { name: 'Início', slug: 'account', href: "/", id: 0 },
              { name: 'Buscar', slug: 'search', href: "/buscar", id: 1 }
            ]},
          }}
          logout={handleLogout}
          service="reader"
          userToken={getToken() || ""}
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
