import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from 'components'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <Link className={styles.link} to='/busca'>
            <button className={styles.btnblock}>Buscar artistas</button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Home
