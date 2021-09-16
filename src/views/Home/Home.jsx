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
        <div className={styles['wrapper']}>
          <h2 className={styles['home-title']}>Find an a Artist</h2>
          <Link to="/busca">
            <button type="button">Click aqui para buscar seu artista</button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
