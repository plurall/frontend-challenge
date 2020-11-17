import React, {Component,Fragment} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import Moment from 'moment';

const cookies = new Cookies();

const urlApi =  process.env.REACT_APP_API_URL

export class User extends Component {

  authenticated_token = cookies.get('authenticated_token');

  state = {
    artist: '', 
    imageArtist: '',
    albums: [],
    date: ''
  };

  getArtist = async res => {   
    const artistLoaded = await axios.get(urlApi+`/artists/${this.props.match.params.id}`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `+this.authenticated_token,
        },
    })
    res = artistLoaded.data
    this.setState({
      artist: res,
      imageArtist: res.images[0],
      generos: res.genres.join(', ')
    })
  };

  getAlbum = async album => {   
    const albumsLoaded = await axios.get(urlApi+`/artists/${this.props.match.params.id}/albums`, {
      params: {
        limit: 10
      },    
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer `+this.authenticated_token,
      },
    })
    const dateDMY = Moment(album.release_date).format('DD/MM/YYYY')

    album = albumsLoaded.data.items    
    console.log(album)
    this.setState({
      albums: album,
      date: dateDMY
    })
  };

  componentDidMount() {
    this.getArtist(this.props.match.params.id)
    this.getAlbum(this.props.match.params.id)
  }
  
  render() {
    const { artist, imageArtist, generos, albums, date } = this.state;
    return (
      <Fragment>        
        <div className="card">
          <div className="align-items-center col-sm-12 d-flex row">
            <div className="col-sm-4">
              <img className="rounded-circle w-100 p-3" src={imageArtist.url}/>
            </div>
            <div className="col-sm-8">
              <div className="text-center">
                <h3>{artist.name}</h3>

                <p className="m-1">Popularidade:</p>
                <p><b>{artist.popularity}</b></p>

                <p className="m-1">Gêneros: </p>
                <p><b>{generos}</b></p>
              </div>
            </div>
          </div>
            <h3 className="text-center">Albuns</h3>
          <div className="col-sm-12 row d-flex justify-content-around">
          {albums.map(album =>  (
            <div key={album.name} className="p-1 text-center col-sm-4">
              <div className="card pt-3">
                <img className="rounded w-100 p-3" src={album.images[0].url}/>
                <p>{album.name}</p>
                <p className="mb-1">Lançamento:</p>
                <p>{date}</p>
              </div>
            </div>
            ))
            }
          </div>

        </div>



      </Fragment>
    );
  }

}

export default User;

