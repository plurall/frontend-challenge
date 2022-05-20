import { SubHeader } from 'components'
import React from 'react'
import { SomosClient } from 'utils'
import HomePage from '../../components/HomePage/HomePage'
class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />

        <HomePage />
      </>
    )
  }
}

export default Home
