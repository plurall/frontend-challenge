import React from 'react';

import { SomosClient } from 'utils'
import { SubHeader, Layout } from 'components'

import styles from './Artista.module.css'



class Artista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome:'',
            popularidade: '',
            imgArtistaUrl: '',
            listaGenero: [],
            listaAlbuns: []
        }; 
        this.idArtista = props.match.params.idArtista ? props.match.params.idArtista : 0;
    }

    idArtista;
    state = {};
    client = new SomosClient();

    async componentDidMount() {
        let dadosArtista = await this.client.getArtistById(this.idArtista);
        let dadosAlbumArtista = await this.client.getAlbumByArtistId(this.idArtista);
        console.log(dadosArtista.data.images);
        this.setState({
            nome: dadosArtista.data.name,
            popularidade: dadosArtista.data.popularity ? dadosArtista.data.popularity : "Sem dados",
            imgArtistaUrl: dadosArtista.data.images ? dadosArtista.data.images : undefined,
            listaGenero: dadosArtista.data.genres ? dadosArtista.data.genres : "Sem dados",
            listaAlbuns: dadosAlbumArtista.data.items ? dadosAlbumArtista.data.items : [],
        });
        console.log(this.state.imgArtistaUrl);
    }

    render() {
        return(
            <Layout>
                <React.Fragment>
                    <SubHeader
                        breadcrumb={[{ text: 'Artista' }]}
                        heading="Artista"
                    />
                    <div className={styles.wrapper}>
                        <div className={styles.fotoArtista}>
                            <Imagem urls={this.state.imgArtistaUrl} styles={styles.fotoArtista}/>
                            
                        </div>
                        <div className={styles.infoArtista}>
                            <strong>Nome</strong>
                            <p>{this.state.nome}</p>
                            <strong>Popularidade</strong>
                            <p>{this.state.popularidade}</p>
                            <strong>Lista de Gêneros</strong>
                            <ListaGenero generos={this.state.listaGenero} />
                        </div>
                        
                    </div>
                    <ListaAlbuns dados={this.state.listaAlbuns} />
                </React.Fragment>
            </Layout>
        );
        
    }
}

const Imagem = (props) => {
    if (props.urls.length) {
        let listaUrls = props.urls;
        return(
            <div className={props.styles}>
                <picture>
                    <img 
                        srcSet={`${listaUrls[2].url} 640w, ${listaUrls[1].url} 320w,  ${listaUrls[0].url} 160w`}
                        media="(max-width: 37.5em)"
                    />
                </picture>
            </div>
        );

    } else {
        return(<div className={styles.semImagem}><h2>SEM IMAGEM</h2></div>);
    }
}

const ListaGenero = (props) => {

    let generos = props.generos;

    if (generos.length) {
        return (<div>
                    <ul>
                    {generos.map(genero => (
                        <li key={genero}>
                            <p>{genero}</p>
                        </li>
                    ))}
                </ul>
            </div>
            );
    } else {
        return(<div><p>Sem dados</p></div>)
    }
}

const ListaAlbuns = (props) => {
    console.log(props)
    let albuns = props.dados;
    //imagem, nome do album, lançamento

    if (albuns.length) {
        return(
            
            <div className={styles.albunsArtista}>
                <SubHeader
                    breadcrumb={[{ text: 'Lista de Albuns' }]}
                    heading="Lista de Albuns"
                />
                {albuns.map(album => (
                    
                    <div className={styles.albumArtista} key={album.id}>
                        <Imagem urls={album.images} styles={styles.fotosAlbuns}/>
                        <div className={styles.infoAlbum}>
                            <strong>Nome</strong>
                            <p>{album.name}</p>
                            <strong>Data de lançamento</strong>
                            <p>{album.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return(<div></div>);
}
export default Artista;
