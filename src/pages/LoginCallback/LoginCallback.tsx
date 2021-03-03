import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { getOauthClient, setToken } from '../../utils'

class LoginCallback extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  state: any = {}

  UNSAFE_componentWillMount () {
    const oauth = getOauthClient()
    const { location }: any = this.props
    const fullPath = `${location.pathname}${location.search}${location.hash}`

    oauth.token.getToken(fullPath).then(({ accessToken }) => {
      setToken(accessToken)
      this.setState({ redirect: true })
    })
  }

  render () {
    const props: any = this.props
    if (this.state.redirect) {
      const search: any = queryString.parse(props.location.search)
      return <Redirect to={search.redirectTo || '/'} />
    }

    return <div>Você tem que estar logado para acessar esta página</div>
  }
}

export default LoginCallback
