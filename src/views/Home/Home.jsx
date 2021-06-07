import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import globalStyles from '../../App.module.css';
import styles from './Home.module.css'

import SpotifyLogo from '../../assets/Spotify_Logo_CMYK_Green.png'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={globalStyles.container}>
          <img className={styles.logoSpotify} src={SpotifyLogo} alt="spotify-logo" />
          <Link to="/busca" className={styles.linkButton}>
            <button className={styles.startButton}>BUSCAR ARTISTA</button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
