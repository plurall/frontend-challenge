import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'
import { Link } from 'react-router-dom'

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

  componentDidMount() {}

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content, footer, 'nav-bar': navBar, nav, link } = styles

    return (
      <>
        <div className={navBar}>
          <NavBar
            data={{
              menu: { items: [{ name: 'Início', slug: 'account', id: 0 }] },
            }}
            logout={this.handleLogout}
            service="reader"
            userToken={getToken()}
          />
          <ul className={nav}>
            <li>
              <Link className={link} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">Busca</Link>
            </li>
          </ul>
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
