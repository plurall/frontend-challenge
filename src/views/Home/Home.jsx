import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import { StyleButtonStart, StyleHomeWrapper } from './styles'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <StyleHomeWrapper>
          <h1>Hi, are you excited to begin you journey?</h1>
          <Link to="/busca">
            <StyleButtonStart>Lets Go!</StyleButtonStart>
          </Link>
        </StyleHomeWrapper>
      </React.Fragment>
    )
  }
}

export default Home
