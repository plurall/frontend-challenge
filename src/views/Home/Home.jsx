import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
class Home extends React.Component {
  state = { data: [] }

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />

        <div className={styles.wrapper}>
          <h1>Welcome!</h1>
          <div className={styles.link}>
            <Link to='/search'>Find your favorits artists</Link>
          </div>
        </div>
      </>
    )
  }
}

export default Home
