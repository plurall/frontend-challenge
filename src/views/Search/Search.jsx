import React from 'react'
import { Link } from 'react-router-dom'

import { SpotifyClient } from 'utils'
import SearchResults from './SearchResults'

import styles from './Search.module.css'
import logoURL from '../../assets/img/spotify-logo.png'

class Search extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    search: '',
  }

  client = new SpotifyClient()

  async handleChange(e) {
    const search = e.target.value
    await this.setState({ search })
    if (search.length >= 4) {
      const artists = await this.client.getArtists(search)
      await this.setState({ artists: artists.items })
    } else {
      await this.setState({ artists: '' })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <Link to="/">
            <img src={logoURL} alt="Spotify" className={styles.logo} />
          </Link>
          <p>Digite o nome do artista</p>
          <input
            type="text"
            className={styles.inputText}
            value={this.state.search}
            onChange={this.handleChange}
          />
          {this.state.artists && (
            <div className={styles.results}>
              <SearchResults artists={this.state.artists} />
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Search
