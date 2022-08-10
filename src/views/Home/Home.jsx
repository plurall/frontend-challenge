import React from 'react'
import { Link } from 'react-router-dom'

import bandImage from 'assets/spotify-logo-bw.svg'
import contentImage from 'assets/home-art.png'

import styles from './Home.module.scss'

class Home extends React.Component {
  state = {}

  render = () => (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <div
          className={styles.contentImage}
          style={{ '--image': `url(${contentImage})` }}
        />
        <div className={styles.title}>
          Encontre os melhores artistas do{' '}
          <span
            className={styles.brandImage}
            style={{ '--image': `url(${bandImage})` }}
          />
        </div>
        <Link to="/busca" className={styles.button}>
          Encontrar artistas
        </Link>
      </section>
    </div>
  )
}

export default Home
