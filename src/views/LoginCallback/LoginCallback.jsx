import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import React, { Component } from 'react'

import { getOauthClient, setToken } from 'utils'

class LoginCallback extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {}

  componentWillMount() {
    const oauth = getOauthClient()
    const { location } = this.props
    const fullPath = `${location.pathname}${location.search}${location.hash}`

    oauth.token.getToken(fullPath).then(({ accessToken }) => {
      setToken(accessToken)
      this.setState({ redirect: true })
    })
  }

  render() {
    if (this.state.redirect) {
      const search = queryString.parse(this.props.location.search)
      return <Redirect to={search.redirectTo || '/'} />
    }

    return <div>Você tem que estar logado para acessar esta página</div>
  }
}

export default LoginCallback
