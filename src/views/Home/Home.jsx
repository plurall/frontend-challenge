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
          <h1 data-testid="text">Home da aplicação</h1>
          <div>
            <Link to="/search" className={styles.button}>Buscar</Link>
          </div>
        </div>
      </>
    )
  }
}

export default Home
