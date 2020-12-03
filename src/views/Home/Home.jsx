import React from 'react'
import { Link } from 'react-router-dom';

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

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
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Olá, seja bem vindo ao teste resolvido pelo Felipe Monteiro!</h1>
          <h4 className={styles.paragraph}>Para ir até a página de busca por artistas, clique no link abaixo:</h4>
          <Link to='/busca' >Buscar Artista</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
