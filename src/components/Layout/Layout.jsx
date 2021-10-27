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

  componentDidMount() {}

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content, footer, header } = styles

    return (
      <>
        <Link to="/">
          <header className={header}>
            
              <img src="/images/logo.svg" alt="Logo Spotify" />
              <span>Spoti</span>Search
          </header>
        </ Link>
        <div className={content}>{children}</div>

        <div className={footer}>
          🚀 Developed by <strong><a href="https://github.com/nakahwra">Lucas Nakahara</a></strong>
        </div>
      </>
    )
  }
}

export default Layout
