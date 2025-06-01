import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Bem-vindo ao Spotify Artist Search</h1>
      <p className={styles.subtitle}>Clique no botão para começar a buscar artistas</p>
      <Link to='/search' className={styles.button}>
        Ir para Busca
      </Link>
    </div>
  )
}

export default Home
