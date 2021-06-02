import { SubHeader } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
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
          <h1>
            Clique no botão abaixo para buscar por um artista
          </h1>
          <Link to="/busca">Buscar artista</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
