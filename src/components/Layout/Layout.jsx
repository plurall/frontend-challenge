import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken, SomosClient } from 'utils'

import styles from './Layout.module.css'
import { BaseRoutes } from 'routes/BaseRoutes'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  client = new SomosClient({
    accessToken: getToken(),
  })

  state = {}

  componentDidMount() {}

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
            data={{
              menu: { items: [
                { name: 'Início', slug: 'account', href: BaseRoutes.login, id: 0 },
                { name: 'Buscar', slug: 'search', href: BaseRoutes.search, id: 1 },
                { name: 'Sair', slug: 'search', href: BaseRoutes.loginCallback, id: 2 },
              ]},
            }}
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
