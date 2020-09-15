import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken, SomosClient, clearToken } from 'utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {}

  componentDidMount() {}

  client = new SomosClient({
    accessToken: getToken(),
  })

  handleLogout = path => {
    setToken('')
    clearToken()
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
                  {
                    name: 'Início',
                    slug: 'account',
                    id: 0,
                  },
                ],
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
