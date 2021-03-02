import React, { Component } from 'react'
import PropTypes from 'prop-types'

// @ts-ignore
import { Footer } from 'plurall-footer'
// @ts-ignore
import NavBar from 'plurall-header'

import { getToken, setToken, SomosClient } from '../../utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state: any = {}

  UNSAFE_componentWillMount () {}

  client = new SomosClient()

  handleLogout = (path: any) => {
    setToken('')
    window.location = path
  }

  render () {
    const {
      props: { children }
    } = this

    const { content, footer, 'nav-bar': navBar } = styles

    return (
      <>
        <div className={navBar}>
          <NavBar
            data={{
              menu: { items: [{ name: 'Início', slug: 'account', id: 0 }] }
            }}
            apiUrl=""
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
