import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Layout } from 'components'

import styles from './Search.module.css'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', artists: {}};
    this.client = new SomosClient();

    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(event) {
    this.setState({value: event.target.value});

    if (this.state.value.length > 3) {
      this.setState({artists: await this.client.getArtists(this.state.value)});
    } else {
      this.setState({artists: {}});
    }
  }

  render() {
    let rows = []

    if (this.state.artists.items) {
      this.state.artists.items.map((row) => {
        rows.push(
          <div className={styles.artist}>
            <h2>{row.name}</h2>
            <p>Type: {row.type}</p>
            <p>
              Primary Gender: {row.genres[0]}
            </p>
            <p>Followers: {row.followers.total} | Popularity: {row.popularity}</p>
            <Link className={styles.link} to={`/artist/${row.id}`}>
              <button className={styles.btn}>Ver artista</button>
            </Link>
          </div>
        );
      });
    }

    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Search' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <input
            className={styles.forminput}
            placeholder="Busque pelo artista desejado..."
            type="text"
            value={this.state.value}
            onChange={this.handleSearch}
          />
          <div className={rows}>
            {rows}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Search
