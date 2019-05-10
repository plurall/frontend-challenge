import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom';
import {  Button } from '@plurall/elo';

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
          <h1>Hi</h1>
          <Link to="/busca">
              <Button>Buscar</Button>
            </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
