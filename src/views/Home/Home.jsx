import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'plurall-ui'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading=""
        />
        <div className={styles.wrapper}>
          <Text className={styles.text_info}>Busque, no Spotify, seus artistas preferidos e veja informações sobre ele.</Text>
          <div className={styles.link_wrapper}><Link to="/busca">Buscar</Link></div>
        </div>
      </>
    )
  }
}

export default Home
