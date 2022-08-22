import React from 'react'

import { Layout, RedirectButton } from 'components'

import styles from './Home.module.scss'

const Home = () => (
  <Layout>
    <div className={styles.backgroud_test}>
      <div className={styles.wrapper}>
        <h1>Descubra artistas</h1>
      </div>
      <div className={styles.wrapper}>
        <RedirectButton title="Buscar artistas" goTo="/busca" />
      </div>
    </div>
  </Layout>
)

export default Home
