import React from 'react'

import { SubHeader, Layout, InfoArtist, CardAlbum, Loader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artista.module.css'
import { translate } from './../../locales';

class Artista extends React.Component {
  constructor(props) {
    super(props);
    this.searchArtist = this.searchArtist.bind(this);

    //Buscar o artista, apenas se ele não foi passado pela pagina anterior
    if (this.props.location.artist) {
      this.state.artist = this.props.location.artist;
      this.getArtistAlbuns();
      sessionStorage.setItem("artists", JSON.stringify(this.props.location.artists));
      sessionStorage.setItem("searchInputValue", this.props.location.searchInputValue);
    } else {
      this.searchArtist();
    }
  }
  state = {
    artist: "",
    albuns: [],
    bLoadingAlbuns: true
  }

  client = new SomosClient()
  searchArtist() {
    if (this.props.match.params.id !== "") {
      this.client.getArtist(this.props.match.params.id).then(resolve => {
        if (resolve.error) {
          console.log(resolve.error);
        } else {
          this.setState({ artist: resolve.artists[0] })
          this.getArtistAlbuns();
        }

      }).catch(erro => {console.log(erro)})
    } 
  }

  getArtistAlbuns() {
    this.client.getArtistAlbuns(this.props.match.params.id).then(resolve => {
      if (resolve.error) {
        console.log(resolve.error);
      } else {
        this.setState({ albuns: resolve.items, bLoadingAlbuns: false })
      }
    }).catch(error => {console.log(error)})
  }

  retornaImage(artist) {
    if (artist.images === undefined || artist.images === null)
      return "";

    if (artist.images.length > 0)
      return artist.images[0].url;
  }

  render() {
    const { artist, albuns, bLoadingAlbuns } = this.state;
    if (artist == null) {
      window.location = "/busca";
    }
    let lstAlbuns = [];
    if (albuns.length > 0)
      lstAlbuns = albuns.map((album) =>
        <CardAlbum key={album.id} album={album}></CardAlbum>
      );
    return (
      <Layout>
        <React.Fragment>
          <SubHeader
            breadcrumb={[{ text: 'Home', href: '/' }, { text: translate('busca.busca'), href: '/busca' }, { text: translate('artista.artista') }]}
            heading={translate('artista.artista')}
          />
          <div className={styles.wrapper}>
            <InfoArtist artist={artist}></InfoArtist>
            <div className={styles.albunsLabel}>
              <h1>{translate('artista.albuns')}</h1>
            </div>
            <div className={styles.listAlbuns}>
              {bLoadingAlbuns ? <Loader text={translate('artista.carregando_albuns')}></Loader> : ''}
              {lstAlbuns}
            </div>
          </div>
        </React.Fragment>
      </Layout>
    )
  }
}

export default Artista
