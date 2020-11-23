import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {

  client = new SomosClient()
  
  artistList = {items:[], total:0, loading:false}

  //Quando for digitado uma palavra com no minimo 4 chars, buscar por artista
  async handleSearchChange(event) {
    const param = event.target.value;
    if (event.target.value.length >= 4) { //se a palavra buscada tiver mais de 4 caracteres
      let searchResult = await this.client.searchArtists(param)
      this.artistList = searchResult.artists
      this.setState(this.artistList)
    } else { //se não tiver
      this.artistList.items = []
      this.artistList.total = 0
      this.setState(this.artistList)
    }
  };

  //Renderiza resultado de busca
  renderArtist(artist) {
    return (
      <li>
        <Link to={`/artista/${artist.id}`}>
          <div className={styles.card}>
            <div className={styles.row} >
              <img src={(artist.images.length>0?artist.images[0].url:"")} />
            </div>
            <div className={styles.row} >
              <h1 className={styles.artistName}>{artist.name}</h1>
            </div>
            <div className={styles.row}>
              <h2>Gêneros: {(artist.genres.length?artist.genres.join():"desconhecido")}</h2> 
            </div>
            <div className={styles.row}>
              <span> Ver mais + </span>
            </div>
          </div>
        </Link>
      </li>
    )
  }

  render() {

    return (
      <React.Fragment>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h1></h1>
              <label to="search-input">
                <h1>Buscar por:</h1>
              </label>
              <input 
                type="text"
                id="search-input"
                placeholder="Digite o Artista"
                onChange={this.handleSearchChange.bind(this)}
              ></input>
            </div>

            <div >
              <br/>
              <ul>
                 {this.artistList.items.map((artist) => {
                  return (
                    this.renderArtist(artist)
                  )
                })}
              </ul>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Search
