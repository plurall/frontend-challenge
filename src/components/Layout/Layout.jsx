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

  client = new SomosClient({
    accessToken: getToken(),
  })

  state = {}

  componentDidMount() { }

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
              menu: {
                items: [{ name: 'Home', slug: 'account', id: 0 , href: '/'},
                //{ name: 'Artista', slug: 'account', id: 1, href: '/Artista/:id' },
                { name: 'Pesquisar', slug: 'account', id: 2, href: '/Pesquisa' }]
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
