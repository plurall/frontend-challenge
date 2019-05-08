import React from 'react'

import { SubHeader, SearchInput, Preview } from 'components'
import { SomosClient } from 'utils';

import styles from './Search.module.css'

/* Handle user typing and key enter pressing */
const WAIT_INTERVAL = 500;
const ENTER_KEY = 13;

const client = new SomosClient()
class Search extends React.Component {
  state = {
    artists: [],
    searchValue: '',
    typing: false,
    typingTimeout: 0
  }

  handleChange = (value) => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      searchValue: value,
      typing: false,
      typingTimeout: setTimeout(function () {
        self.search(self.state.searchValue);
      }, WAIT_INTERVAL)
    });
  }

  /* Use results from fetch */
  search = (value) => {
    client.getArtists(value)
    .then((res) => {
      const artists = res['artists']['items'];
      this.setState({ artists })
    });
  }

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Search' }]}
          heading="Somos Front-end Challenge"
        />
        <div className={styles.searchInput}>
          <SearchInput
            label='Find your favorite artists'
            placeholder='Start typing'
            notFoundMessage='No artists found'
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.wrapper}>
          <h1>Artists found: {this.state.artists.length}</h1>
          <section>
            {this.state.artists.map((e, k) => {
              let background;
              if (e['images'].length > 0){
                background = e['images'][1]['url']
              }
              return (
                <Preview
                  key={k}
                  id={e['id']}
                  image={background}
                  name={e['name']}
                />
              )
            })}
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default Search