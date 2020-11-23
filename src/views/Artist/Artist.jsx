import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Artist extends React.Component {
  client = new SomosClient()
  constructor(prop) {
    super(prop)

    this.artistId = (prop.match.params.id?prop.match.params.id:"")
    console.log(this.artistId)
    this.loadArtist()
  }

  //Busca informações do Artista e do ultimos albums
  async loadArtist() {
    const [artist, albums] = await Promise.all([this.client.getArtist(this.artistId), this.client.getAlbums(this.artistId)])
    this.setState({ artist, albums });
  }

  //Renderiza descrição do Artista
  renderArtist(){
    if (this.state.artist) {  
      var artist = this.state.artist
    
      return (<div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.row}>
            <img src={(artist.images.length>0?artist.images[0].url:"")} />
          </div>
          <div className={styles.row}>
            <h1>{artist.name}</h1>
          </div>
            <span>
              Popularidade: <strong className={(artist.popularity>66?styles.green:(artist.popularity>33?styles.yellow:styles.red))}>{artist.popularity}%</strong> 
            </span>
          <div className={styles.row}>
            <span>
              Generos: 
              <ul>
                {(artist.genres.length?artist.genres.map((genre) => {
                  return (
                    <li>
                      {genre}
                    </li>
                  )
                }):"desconhecido")}
              </ul>
            </span>
          </div>
        </div>
      </div>)
    }
  }

  //Renderiza albuns do Artista
  renderAlbum(){
    if (this.state.albums) {
      var albums = this.state.albums
    
      return (<div className={styles.wrapper}>
        <div className="row">
          <ul>
            {albums.items.map((album) => {
                  return (
                    <li>
                      <div className={styles.album}>
                        <img src={(album.images.length>0?album.images[0].url:"")} />
                        <strong className={styles.albumName}>{album.name}</strong>
                        <span className={styles.release}>Lançado em {album.release_date.split('-').reverse().join('/')}</span>
                      </div>
                    </li>
                  )
                })}
          </ul>
        </div>
      </div>)
    }
  }

  state = {}

  render() {
    // console.info(this.client.getArtist(this.artistId))
    if (this.artistId) {
      return (
        <React.Fragment>
          <div>
            <div>
              {this.renderArtist()}
            </div>
            <div>
              {this.renderAlbum()}
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return(
            <div className={styles.wrapper}>
              <h1>ERRO!</h1>
              <strong>Artista não encontrado</strong>
            </div>
      )
    }
    
  }
}

export default Artist
