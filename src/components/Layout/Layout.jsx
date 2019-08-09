import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { getToken, setToken, SpotifyClient } from 'utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {}

  componentDidMount() {}

  client = new SpotifyClient({
    accessToken: getToken(),
  })

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content } = styles

    return (
      <>
        <div className={content}>{children}</div>
      </>
    )
  }
}

export default Layout
