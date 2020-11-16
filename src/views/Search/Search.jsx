import React from 'react'

import { SubHeader, SearchInput, SearchResults } from 'components'
import { SomosClient } from 'utils'
import styles from './Search.module.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: { value: '', results: [] } };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  client = new SomosClient();

  handleChange(event) {
    this.setState({ search: { value: event.target.value, results: this.state.search.results } }, () => {
      if (this.state.search.value.length >= 4) {
        console.log('antes')
        this.client.getArtists(this.state.search.value, (artistsResult) => {
          console.log('depois')
          console.log(artistsResult);
          this.setState({ search: { value: this.state.search.value, results: artistsResult } });
        });
      }
    });

  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home > Pesquisa' }]}
          buttonHref="/"
          heading="Pesquisa"
        />
        <div className={`container ${styles.searchContent}`} >
          <SearchInput value={this.state.search.value} onChangeEvent={this.handleChange} />
          <SearchResults searchResults={this.state.search.results}></SearchResults>
        </div>
      </React.Fragment>
    )
  }
}

export default Search