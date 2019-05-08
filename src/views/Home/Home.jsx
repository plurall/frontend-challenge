import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import { Button } from '@plurall/elo'

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
        <Button>
          <Link to="/busca" className={styles.link}>Página de Busca</Link>
        </Button>
        <div className={styles.wrapper}>
          <h1>Hi</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
