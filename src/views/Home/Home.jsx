import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import { Link } from 'react-router-dom'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader heading="Somos Front-end Challange" />
        <div className={styles.buttons}>
          <Link to="/busca" className={styles.button}>
            Buscar artista
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
