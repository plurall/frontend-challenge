import React from 'react'

import { Link } from 'react-router-dom'
import { SpotifyClient } from 'utils'

import styles from './Home.module.css'
import logoURL from '../../assets/img/spotify-logo.png'

class Home extends React.Component {
  state = {}

  client = new SpotifyClient()

  render() {
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <img src={logoURL} alt="Spotify" className={styles.logo} />
          <p>Clique no botão abaixo para buscar um artista</p>
          <Link to="/busca" className={styles.btn}>
            Buscar
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
