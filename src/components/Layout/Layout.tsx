import React, { ReactNode } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken } from 'utils'

import * as styles from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  const handleLogout = (path: string & Location) => {
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
          service='reader'
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
