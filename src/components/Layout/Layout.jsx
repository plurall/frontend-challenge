import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken} from 'utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  // client = new API({
  //   accessToken: getToken(),
  // })

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
        <header className={styles.header}>
          <NavBar
            data={{
              menu: { items: [{ name: 'Início', slug: 'account', id: 0 }] },
            }}
            logout={this.handleLogout}
            service="reader"
            userToken={getToken()}
          />
        </header>

        <div className={content}>{children}</div>

        <footer className={footer}>
          <Footer />
        </footer>
      </>
    )
  }
}

export default Layout
