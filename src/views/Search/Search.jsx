/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React from 'react'

import { SubHeader } from 'components'
import { SomosClient, debounce } from 'utils'

import styles from './Search.module.scss'

class Search extends React.Component {
  state = {
    artistList: [],
    searchName: '',
  }

  client = new SomosClient()

  async getArts() {
    const response = await this.client.getArtists()
    this.setState({ artistList: response.artists })
  }

  async getArtsByName(name) {
    const response = await this.client.getArtistsByName(name)
    this.setState({ artistList: response.artists.items })
  }

  debounceSearch = debounce(async name => {
    await this.getArtsByName(name)
  }, 500)

  async handleChange(event) {
    this.setState({ searchName: event.target.value })
    if (event.target.value.length > 4) {
      this.debounceSearch(event.target.value)
    }

    if (event.target.value.length === 0) {
      await this.getArts()
    }
  }

  goToArtist(id) {
    this.props.history.push(`/search/${id}`)
  }

  componentDidMount() {
    this.getArts()
  }

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home', href: '/' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>
          <h3>Lista de artistas do Spotify</h3>
          <input
            placeholder="Busque aqui seu artista favorito..."
            value={this.state.searchName}
            onChange={event => this.handleChange(event)}
          />

          <div className={styles.artistList}>
            {this.state.artistList?.map(artist => (
              <div
                className={styles.card}
                onClick={() => this.goToArtist(artist.id)}
              >
                <div className={styles.cardImage}>
                  <img src={artist?.images[0]?.url} alt="img" />
                </div>
                <div className={styles.cardContent}>
                  <h2>{artist?.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Search
