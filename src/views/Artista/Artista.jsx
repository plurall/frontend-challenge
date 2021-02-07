import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Layout, Loader, Album } from 'components'

import styles from './Artista.module.css'

class Artista extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      artista: {},
      albuns: {},
      exibirLoading: true
    }
  }

  client = new SomosClient()

  async getDataFromServer(id_artista){
    if(id_artista){
      this.setState({exibirLoading: true});
      let await_artistas = this.client.getArtist(id_artista);
      let await_albums = this.client.getAlbums(id_artista);
      let data = {
          artista: await await_artistas,
          albuns: await await_albums
      }
      //Faço as 2 chamadas ao mesmo tempo
      this.setState({
        exibirLoading: false,
        artista: data.artista,
        albuns: data.albuns
      });
      
    }
  }

  componentDidMount(){
    let id_artista = this.props.match.params.id;
    if(id_artista){
      this.getDataFromServer(id_artista);
      
    }else{
      this.props.history.push("/busca");
    }
    
  }

  render() {
    let loader = null;
    let esconderDuranteLoading = null
    if(this.state.exibirLoading){
      loader = <Loader texto={'Carregando informações do artista...'}/>;
      esconderDuranteLoading = {
        display: 'none'
      }
    }

    let imagemArtista = null;
    let generos = ''; 

    if(this.state.artista){

      // Crio a imagem do artista
      if(this.state.artista.images)
      if(this.state.artista.images.length > 0){
        let lastImage = this.state.artista.images[this.state.artista.images.length - 1];
        imagemArtista = <img src={lastImage.url} alt='sem imagem'></img>;
      }

      // Crio a listagem dos generos
      if(this.state.artista.genres){
        generos = this.state.artista.genres.join(', ');
      }
    }
    
    // Crio a listagem dos albuns
    let listaAlbuns = [];
    if(this.state.albuns){
      if(this.state.albuns.items){
        listaAlbuns = this.state.albuns.items.map((album) =>
          <Album key={'album_'+ album.id.toString()} album={album}></Album> 
        );
      }
      
    }
    

    return (
        <Layout>
            <React.Fragment>
                <SubHeader
                breadcrumb={[{ text: 'Home', href: '/' },{ text: 'Busca', href: '/busca' }, { text: 'Artista' }]}
                heading="Artista"
                />
                {loader}
                <div className={styles.wrapper} style={esconderDuranteLoading}>
                  <div>
                    <h1>{this.state.artista.name}</h1>
                    {imagemArtista}
                  </div>
                  <div>
                    <div className={styles.cardText} >
                      <p>
                        Popularidade: {this.state.artista.popularity}
                      </p>
                      <p>
                        Generos: {generos}
                      </p>
                      <div className={styles.listaAlbuns}>
                        {listaAlbuns}
                      </div>
                    </div> 
                  </div>
                </div>
                
            </React.Fragment>
        </Layout>
    )
  }
}

export default Artista
