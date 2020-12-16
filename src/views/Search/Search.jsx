import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Layout, Artist } from 'components'

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
          <Link className={styles.link} to={`/artista/${row.id}`}>
            <Artist artist={row}/>
          </Link>
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
