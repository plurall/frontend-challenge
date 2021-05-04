import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken, SomosClient } from 'utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    token: null,
  }

  componentDidMount() {
    this.setState({ token: getToken() })
  }

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content, footer, 'nav-bar': navBar } = styles

    const items = [
      { name: 'Início', slug: 'inicio', id: 0, href: '/' },
      { name: 'Busca', slug: 'busca', id: 1, href: 'busca' },
      { name: 'Sair', slug: 'sair', id: 2, link_url: '/' },
    ]
    
    return (
      <>
        <div className={navBar}>
          <NavBar
            data={{
              menu: {
                items,
              },
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
