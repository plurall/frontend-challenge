import React from 'react';
import { SomosClient } from 'utils';
import ResultArtists from './ResultArtists';

import styles from './Search.module.css';

class Search extends React.Component {
  constructor() {
    super();
    this.onChangeSearch = this.onChangeSearch.bind(this);
  };

  state = {
    search: '',
    artists: [],
  };

  client = new SomosClient();

  async onChangeSearch(e) {
    const search = e.target.value;
    this.setState({ search });
    if (search.length > 4) {
      const artists = await this.client.getArtists(search);
      this.setState({ artists: artists });
    } else {
      this.returnSearch()
      this.setState({ artists: [] });
    }
  };

  returnSearch = () => {
    if (this.state.search.length > 4) {
      return (
        <p>A sua busca por <b><i>"{this.state.search}"</i></b> encontrou <b>{this.state.artists.length}</b> resultados.</p>
      );
    }
    else return (<p>Sua busca deve conter mais de 4 caracteres.</p>);
  };

  render() {
    return (
      <>
        <div className={this.state.search.length > 4 ? styles.wrapper : styles.fullWrap}>
          <input
            type="text"
            className={styles.searchInput}
            value={this.state.search}
            placeholder="Busque por um artista"
            onChange={this.onChangeSearch}
          />
          
          <div className={styles.msgSearch}>
            {this.returnSearch()}
          </div>
        </div>
        <div className={styles.resultArtists}>
          {this.state.artists && this.state.artists.map(artist => (
            <ResultArtists key={artist.id} artist={artist} />
          ))}
        </div>
      </>
    );
  };
};

export default Search;
