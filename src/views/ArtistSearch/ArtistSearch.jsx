import React from 'react'
import { getToken, SomosClient } from 'utils'
import styles from './ArtistSearch.module.css'
import axios from 'axios';

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
    this.onChangePesquisar = this.onChangePesquisar.bind(this);
    this.state = {
      searchKey: '',
      artists: []
    }
 }

  onChangePesquisar(e) {
    this.setState({
      searchKey: e.target.value
    });

  }

  searchArtists = async (searchKey) => {

    let token = getToken();

    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    this.setState({
      artists : data.artists.items
    });

}

renderArtists = () => {

    return this.state.artists.map(artist => (
        
        <div key={artist.id}>
            <h1>Página do Artista</h1> 
            {artist.images.length ? <img width={"5%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}

render() {


    return (
      <>
        <div className={styles.wrapper}>
         

            <form onSubmit={this.searchArtists}>
                <input type="text" className="form-control" value={this.state.searchKey} onChange={this.onChangePesquisar} placeholder='Pesquia de Artista' />
                <button type={"submit"}>Pesquisar</button>
            </form>

            {this.renderArtists()}

        </div>

      </>
    )
  }
}

export default ArtistSearch
