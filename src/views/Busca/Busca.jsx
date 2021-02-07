import React from 'react';
import _ from "lodash";

import { SubHeader, Layout, CardArtista, Loader } from 'components';
import { default as SomosClient } from 'utils/client';

import styles from './Busca.module.css';

class Busca extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      artistas: {},
      textoPesquisa: '',
      exibirLoading: false
    }

    //uso o bind para o this funcionar no callback do evento de click do botão
    //Obs.: Preferio usar o bind a uma arrow function no evento por questões de performance
    this.pesquisarArtistaButton = this.pesquisarArtistaButton.bind(this);

    this._debouncedSearch = _.debounce(
      () => this.getDataFromServer(),
      1000
    );
  }

  

  client = new SomosClient()

  async getDataFromServer(){
    try {
      if(this.state.textoPesquisa.length > 0){

        this.setState({
          artistas: [],
          exibirLoading: true
        });
        
        let resposta = await this.client.getArtists(this.state.textoPesquisa);
        
        //Descomente o timeout se quiser ver o loading por mais tempo
        //setTimeout(() => {
          this.setState({
            artistas: resposta.artists,
            exibirLoading: false
           });  
        // }, 2000);
        
        
      }
    } catch (error) {
      if(error.status === 401){
        //Redireciono pra página raiz pra que o usuário se autentique novamente
        this.props.history.push("/");
      }
      
    }
  }

  componentDidMount(){
    this.getDataFromServer();
  }

  pesquisarArtista(e){
    let keyword = e.target.value;
    this.setState({textoPesquisa: keyword});

    if(keyword.length > 4){
      
      //this.getDataFromServer();
      this._debouncedSearch();
    }
  }

  pesquisarArtistaButton(){
    this.setState({textoPesquisa: this.state.textoPesquisa});
    this.getDataFromServer();
  }

  render() {
    let listaArtistas = [];

    if(this.state.artistas.items)
    listaArtistas = this.state.artistas.items.map((artista) =>
      <CardArtista key={artista.id} artista={artista}></CardArtista> 
    );

    let loader = null;
    let disabledDuringSearch = false;
    if(this.state.exibirLoading){
      disabledDuringSearch = true;
      //loader = <div className={styles.loaderBox}><div className={styles.loader}></div>Efetuando pesquisa, aguarde o resultado...</div>;
      loader = <Loader texto={'Efetuando pesquisa, aguarde o resultado...'}/>;
    }

    return (
        <Layout>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <React.Fragment>
                <SubHeader
                breadcrumb={[{ text: 'Home', href: '/' }, { text: 'Busca' }]}
                heading="Artistas cadastrados no Spotify"
                />
                <div className={styles.searchBox}>
                    <input 
                      id='searchTextId'
                      disabled={disabledDuringSearch}
                      type="search" 
                      placeholder="Pesquisa por artista.." 
                      name="search"
                      onChange={(e)=>this.pesquisarArtista(e)}
                    />
                    <button 
                      id='searchButtomId'
                      type="submit"
                      disabled={disabledDuringSearch}
                      onClick={this.pesquisarArtistaButton}
                    ><i className="fa fa-search"></i></button>
                </div>

                {loader}
                <div className={styles.listaArtistas}>
                {listaArtistas}
                </div>
                  
                
            </React.Fragment>
        </Layout>
    )
  }
}

export default Busca
