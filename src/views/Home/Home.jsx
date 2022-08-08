import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.scss'
// eslint-disable-next-line import/first
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader breadcrumb={[{ text: 'Home' }]} heading="" />
        <div className={styles.wrapper}>
          <h1>Busque seu artista favorito.</h1>
          <Link to="/busca">Ir para a busca</Link>
        </div>
      </>
    )
  }
}

export default Home
