import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

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
          <h1 className="text-tittle">Pesquise seu artista favorito</h1>
        </div>
        <div className="button-search">
          <Link to="/search">
            <button
              type="button"
            >Pesquisar
            </button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
