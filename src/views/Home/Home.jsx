import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import { Link } from 'react-router-dom'

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
        <div>
          <Link to="/busca">Buscar artista</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
