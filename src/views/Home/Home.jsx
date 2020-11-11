import React from 'react'

import { SubHeader, LinkButton } from 'components'
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
          <h2 className={styles.title}>Seja bem-vindo</h2>
          <LinkButton buttonHref="/search">Buscar artista</LinkButton>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
