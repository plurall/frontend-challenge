import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artista.module.css'

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
          <h1>Artista</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
