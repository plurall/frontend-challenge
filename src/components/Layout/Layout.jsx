import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Sidebar } from 'components'
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
        <main className={styles.main}>
          <Sidebar />
          <div className={content}>{children}</div>
        </main>
        <div className={footer}>
          <Footer />
        </div>
      </>
    )
  }
}

export default Layout
