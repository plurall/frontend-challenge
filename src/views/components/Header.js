import React from 'react'
import SpotifyLogo from '../Images/logo.png'

import styles from './Header.module.css'

class Header extends React.Component {
    state = {}
    render() {
        return (
          <header className={styles.header}>
            <img className={styles.img} src={SpotifyLogo} alt="Spotify-Logo" />
            <h4 className={styles.brand}>Spotify</h4>
          </header>
        )
    }
}

export default Header
