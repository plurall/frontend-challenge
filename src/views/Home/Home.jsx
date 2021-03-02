import React from 'react'
import { Link } from 'react-router-dom'
import LogoSpotify from '../../assets/images/logo-spotify-white.svg'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <img src={LogoSpotify} alt={'logo-spotify-white'} />
      <Link to="/busca">
        <button className={styles.buttonPrimary}>Buscar Artista</button>
      </Link>
    </div>
  )
}

export default Home
