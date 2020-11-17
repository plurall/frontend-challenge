
import React, { Component,Fragment } from 'react';
import ArtistList from '../ArtistList/ArtistList'
import axios from 'axios'
import Cookies from 'universal-cookie';

const urlApi =  process.env.REACT_APP_API_URL
const cookies = new Cookies();

export class Search extends Component {
  authenticated_token = cookies.get('authenticated_token');
  
  state = {
    artist: [], 
    text: '',
    usersReturn: false,
    busca: ''
  };
  
  onSubmit = async artist => {
    artist.preventDefault();    
    this.setState({ usersReturn: true });
    if(this.state.text.length > 4 ) {
      const apiResponse = await axios.get(urlApi+`/search`, {
      params: {
        query: this.state.text,
        type: 'artist',
        limit: 50,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer `+this.authenticated_token,
      },
    })

    artist = apiResponse.data.artists.items

    console.log(artist)

  this.setState({
    artist: artist,
    text: '',
    busca: this.state.text,
    })


  }
};
  
  returnSearch = () => {
    if (this.state.artist.length === 0 && this.state.usersReturn) {
      return (
        <div className="alert alert-danger mt-3 container">
          A sua pesquisa por <b><i>"{this.state.busca}"</i></b> não encontrou nenhum resultado. Tente novamente!
        </div>
      );
    }

    if (this.state.artist.length !== 0 && this.state.usersReturn) {
      return (
        <div>
          <div className="alert alert-info mt-3 container">
            A sua pesquisa por <b><i>"{this.state.busca}"</i></b> encontrou <b>{this.state.artist.length}</b> resultados.
          </div>
          <h4 className="mt-4 text-center">Artistas encontrados</h4>  
        </div>
      );
    }
  }
  

  ValueSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { artist, imageArtist } = this.state;
    return (
      <div className="wrap-header">
        <form className='form d-flex w-100 justify-content-center align-items-sm-center' onSubmit={this.onSubmit}>
          <input
            data-testid="form-field"
            className="form-control w-100 p-1 mr-3"
            type='text'
            name='text'
            placeholder='Faça aqui a sua busca por um artista...'
            value={this.state.text}
            onChange={this.ValueSearch}
          />
          <input
            data-testid="form-btn"
            type='submit'
            value='Pesquisar'
            className='btn btn-light'
            disabled={this.state.text.length <= 4}
          />
        </form>
        <small>Sua busca deve conter no mínimo 4 caracteres</small>

        <Fragment>
          {this.returnSearch()}
          <ArtistList artist={artist} imageArtist={imageArtist} />
        </Fragment>
    </div>
    )
  }

}

export default Search;