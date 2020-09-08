import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.css'
import spotifyLogoImg from '../../assets/img/spotify-logo.svg'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.spotifyLogo}>
            <img src={spotifyLogoImg} alt="Spotify" />
          </div>
          <div className={styles.wrapper}>
            <Link to="/busca" className={styles.searchButton}>
              Buscar Artistas
          </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Home
