import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'

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
        <div className={styles.wrapper}>
          <h1>
            Bem vindo a busca de artitas do Spotify, clique no botão abaixo e
            encontre seu favorito.
          </h1>
          <Link to="/search">Buscar artitas</Link>
        </div>
      </>
    )
  }
}

export default Home
