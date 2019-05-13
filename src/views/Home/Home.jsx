import React from 'react'

import { SubHeader, Button } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'
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
        <Link to="/busca">
          <Button className={styles.wrapper}>Buscar</Button>
        </Link>
      </React.Fragment>
    )
  }
}

export default Home
