import React from 'react'
import SpotifyLogo from '../Images/logo.png'

class Header extends React.Component {
    state = {}
    render() {
        return (
          <header className="mh-100">
            <img src={SpotifyLogo} alt="Spotify-Logo" />
            <h4>Spotify</h4>
          </header>
        )
    }
}

export default Header
