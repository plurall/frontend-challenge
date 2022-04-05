import React from 'react'
import { SubHeader, Layout, CardArtist, Loader } from 'components'
import { SomosClient } from 'utils'
import { TextBox } from 'plurall-ui'
import styles from './Busca.module.css'
import { translate } from './../../locales';

class Busca extends React.Component {
  constructor(props) {
    super(props);
    this.searchEvent = this.searchEvent.bind(this);
    this.timeout = 0;
    let artistis = this.verifyOldSearch();
    this.state = {
      artists: artistis,
      bNoResults: artistis.length === 0,
      bLoading: false
    }
    console.log(this.props.location)
  }
  searchInputValue = "";
  client = new SomosClient()
  
  verifyOldSearch(){
    let artists = []
    this.artistsLocal = sessionStorage.getItem("artists");
    if(this.artistsLocal != null){
      artists = JSON.parse(this.artistsLocal);
      this.searchInputValue = sessionStorage.getItem("searchInputValue");
      sessionStorage.removeItem("artists");
      sessionStorage.removeItem("searchInputValue");
    }
    return artists;
  }

  searchEvent(value, timeoutSearch) {
    this.searchInputValue = value;
    this.setState({ artists: [], bNoResults: false, bLoading: true });
    if (value === null || value === undefined || value === "") {
      this.setState({ artists: [], bNoResults: true, bLoading: false })
      return;
    }

    if (value.length >= 4) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.client.searchArtists(value).then(resolve => {
          if (resolve.error) {
            console.log(resolve.error);
          } else {
            this.setState({ artists: resolve.artists.items, bLoading: false })
          }
        }).catch(error => {console.log(error)});
      }, timeoutSearch);
    }
  }

  render() {
    this.noResults = false;
    const { artists, bNoResults, bLoading } = this.state;
    let lstArtists = [];
    if (artists.length > 0)
      lstArtists = artists.map((artist) =>
        <CardArtist key={artist.id} artist={artist} artists={artists} searchInputValue={this.searchInputValue}></CardArtist>
      );
    return (
      <Layout>
        <React.Fragment>
          <SubHeader
            breadcrumb={[{ text: 'Home', href: '/' }, { text: translate('busca.busca') }]}
            heading={translate('busca.buscar_artista')}
          />
          <div className={styles.wrapper}>
            <div className={styles.searchInput}>
            <TextBox value={this.searchInputValue} onChange={value => this.searchEvent(value, 1000)} placeholder={translate('busca.buscar_artista')}></TextBox>
              {bLoading ?
                <div className={styles.loader}>
                  <Loader></Loader>
                </div> : ''
              }
              {bNoResults ?
                <div className={styles.noResults}>{translate('busca.nenhum_resultado_encontrado')}</div> : ''
              }
            </div>
            <div className={styles.listArtists}>
              {lstArtists}
            </div>
          </div>
        </React.Fragment>
      </Layout>
    )
  }
}

export default Busca
