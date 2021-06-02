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

  // eslint-disable-next-line react/sort-comp
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
              menu: {
                items: [
                  { name: 'Início', slug: 'account', href: '/', id: 0 },
                  {
                    name: 'Buscar artistas',
                    slug: 'busca',
                    href: 'busca',
                    id: 1,
                  },
                ],
              },
            }}
            logout={this.handleLogout}
            service="reader"
            userToken={getToken()}
          />
        </div>

        <div
          className={content}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {children}
        </div>

        <div className={footer}>
          <Footer />
        </div>
      </>
    )
  }
}

export default Layout
