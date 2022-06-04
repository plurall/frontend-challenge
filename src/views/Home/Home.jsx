import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
class Home extends React.Component {
  state = { data: [] }

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />

        <div className={styles.wrapper}>
          <h1>Bem Vindo ao Clone do Spotify!</h1>
          <div>
            <Link to='/search'>Pesquise seu Artista</Link>
          </div>
        </div>


      </>
    )
  }
}

export default Home
