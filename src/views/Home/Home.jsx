import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Desafio Front-end do Plurall"
      />
      <div className={styles.wrapper}>
        <h1>Bem-vindo à Busca de Artistas Spotify!</h1>
        <Link to="/busca">Realizar nova busca</Link>
      </div>
    </>
  )
}

export default Home
