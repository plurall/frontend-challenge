import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NavBar from 'plurall-header'
import { Footer } from 'plurall-footer'

import { getToken, setToken } from 'utils'

import styles from './Layout.module.scss'

const menuItems = [
  { name: 'Início', slug: 'account', id: 0, href: '/' },
  { name: 'Busca', slug: 'search-artistas', id: 1, href: '/busca' },
]

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {}

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content, footer, 'nav-bar': navBar } = styles

    return (
      <>
        <div className={navBar}>
          <NavBar
            data={{ menu: { items: menuItems } }}
            logout={this.handleLogout}
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
}

export default Layout
