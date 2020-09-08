import React from 'react'

import { SomosClient } from 'utils'
import SearchResultItem from './SearchResultItem'

import styles from './Search.module.css'

class Search extends React.Component {
  constructor() {
    super()
    this.onChangeSearch = this.onChangeSearch.bind(this)
  }

  state = {
    search: '',
    artists: [],
  }

  client = new SomosClient();

  async onChangeSearch(e) {
    const search = e.target.value;
    this.setState({ search });
    if (search.length > 4) {
      const artists = await this.client.getArtists(search);
      this.setState({ artists: artists });
    } else {
      this.setState({ artists: [] });
    }
  }

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <p>Pesquise artistas pelo nome:</p>
          <input
            type="text"
            className={styles.searchInput}
            value={this.state.search}
            placeholder="Ex: The Beatles, AC/DC, Dire Straits"
            onChange={this.onChangeSearch}
          />
          <div className={styles.results}>
            {this.state.artists && this.state.artists.map(artist => (
              <SearchResultItem key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Search;
