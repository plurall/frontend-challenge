import React from 'react';

import { SubHeader, SearchInput, Preview } from 'components'
import { SomosClient } from 'utils';
import { Heading, Alert } from 'plurall-ui';

import styles from './Search.module.css';
import noImage from '../../noImage.svg';

/* Handle user typing and key enter pressing */
const WAIT_INTERVAL = 500;

const client = new SomosClient()
class Search extends React.Component {
  state = {
    artists: [],
    notFound: false,
    loading: false,
    searchValue: '',
    typingTimeout: 0
  }

  handleChange = (value) => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    if(value.length > 4){
      /* Timeout to handle user typing */
      self.setState({
        loading: true,
        searchValue: value,
        typingTimeout: setTimeout(function () {
          self.search(self.state.searchValue);
        }, WAIT_INTERVAL)
      });
    }
  }

  /* Use results from fetch */
  search = (value) => {
    client.getArtists(value)
    .then((res) => {
      if(res['artists'] && res['artists']['items'].length > 0){
        const artists = res['artists']['items'];
        this.setState({ loading: false, artists, notFound: false })
      } else {
        this.setState({ loading: false, artists: [], notFound: true })
      }
    })
    .catch((err) => {
      this.setState({ loading: false, notFound: false })
      return alert(err.message)
    });
  }

  render() {
    const { artists, notFound, searchValue, loading } = this.state;
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Pesquisa' }]}
          heading="Somos Front-end Challenge"
        />
        <div className={styles.wrapper}>
          <div className={styles.searchInput}>
            <SearchInput
              label='Encontre seus artistas preferidos'
              placeholder='Comece a digitar'
              notFoundMessage='No artists found'
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>
          { artists.length > 0 ? 
            <React.Fragment>
              <Heading>{`Artistas encontrados: ${artists.length}`}</Heading>
              <section>
                {artists.map((e, k) => {
                  let background;
                  if (e['images'].length > 0){
                    background = e['images'][1]['url']
                  } else {
                    background = noImage;
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
            </React.Fragment>
          : null }
          { loading ? <Heading>Carregando...</Heading> : null }
          { !loading && notFound ? <Heading>{`Nenhum artista encontrad@ para '${searchValue}'`}</Heading> : null }
        </div>
      </React.Fragment>
    )
  }
}

export default Search