import React from 'react'
// @ts-ignore
import { Footer } from 'plurall-footer'
// @ts-ignore
import NavBar from 'plurall-header'
import { getToken, setToken } from '../../utils'
import styles from './Layout.module.css'
import { RouteProps } from 'react-router-dom'

const Layout = ({ children }: RouteProps) => {
  const handleLogout = (path: any) => {
    setToken('')
    window.location = path
  }
  const { content, footer, 'nav-bar': navBar } = styles

  return (
      <>
        <div className={navBar}>
          <NavBar
            data={{
              menu: { items: [{ name: 'Início', slug: 'account', id: 0 }] }
            }}
            apiUrl=""
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
