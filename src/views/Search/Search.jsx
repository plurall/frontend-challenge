import React from 'react'

import { SubHeader, ArtistCard } from 'components'
import { SomosClient } from 'utils'

import { Input } from 'plurall-form'

import styles from './Search.module.css'
import { ReactComponent as SearchIcon } from './search-icon.svg'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.isLoading = false
    this.apiReturn = {}
    this.artists = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
    if (this.state.value.length < 4) {
      this.isLoading = false
      this.artists = {}
    }
    if (this.state.value.length >= 4) {
      this.isLoading = true
      const api = new SomosClient()
      this.apiReturn = api.getArtists(e.target.value)
      this.apiReturn.then(() => {
        this.isLoading = false
        this.artists = api.artists.artists
      })
    }
  }

  render() {
    let loading
    if (this.isLoading && this.artists.items === undefined) {
      loading = (
        <div className={styles.loading}>
          <SearchIcon />
        </div>
      )
    } else {
      loading = ''
    }

    const results = []
    if (this.artists.items) {
      this.isLoading = false
      for (let i = 0; i < this.artists.items.length; i += 1) {
        const imageSrc = this.artists.items[i].images[0] !== undefined ? this.artists.items[i].images[0].url : ''
        results.push(
          <ArtistCard imageSrc={imageSrc} name={this.artists.items[i].name} spotifyId={this.artists.items[i].id} />,
        )
      }
    }

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home', href: '/' }, { text: 'Busca' }]}
          buttonHref="/"
          heading="Busca de Artistas"
        />
        <div className={styles.wrapper}>
          <h2>Digite aqui o nome do artista que você deseja buscar:</h2>
          <div className={styles.input}>
            <Input type="text" text="text" placeholder="Ex: Barões da Pisadinha" onChange={this.handleChange} value={this.state.value} />
          </div>
          {loading}
          <div className={styles.results}>
            {results}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
