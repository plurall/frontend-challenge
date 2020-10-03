import React from 'react'
import { Link } from 'react-router-dom'

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
          <h3 className={styles.subtitle}>
            Clique no botão para buscar seu artista preferido :D
          </h3>
          <Link className={styles.searchBtn} to="search-artists">
            Buscar artista
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
