import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader, Layout } from 'components'

import styles from './Home.module.css'

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <Link to="/busca">
            <button className={styles.btn}>Buscar Artistas</button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Home
