import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { SubHeader, Layout, Card } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends Component {
  constructor() {
    super();
    this.client = new SomosClient();
    this.state = {
      value: '',
      artists: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(event) {
    this.setState({value: event.target.value});

    if (this.state.value.length > 3) {
      this.setState({artists: await this.client.getArtists(this.state.value)});
    } else {
      this.setState({artists: null});
    }
  }

  render() {
    const {artists} = this.state
    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Home / Busca' }]}
          heading="Busca"
        />
         <div className={styles.wrapper}>
          <input
            className={styles['c-search__input']}
            placeholder="Busque pelo artista desejado..."
            type="search"
            value={this.state.value}
            onChange={this.handleSearch}
          />
          <section className={styles['c-search__result']}>
            {artists &&
              artists.items.map((artist,index) => (
                <Link key={index}  to={`artist/${artist.id}`}>
                  <Card artist={artist} />
                </Link>
              ))
            }
          </section>
        </div>
      </Layout>
    )
  }
}

export default Search
