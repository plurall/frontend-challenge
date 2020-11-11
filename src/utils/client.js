import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.urlApi =  process.env.REACT_APP_API_URL;
    this.headers =  new Headers({
      'Authorization': 'Bearer ' + getToken(), 
      'Content-Type': 'application/json'
    });    
  }

  onError = error => {}

  async searchArtists (q) {
    var options = { method: 'GET', headers: this.headers };

    const params = new URLSearchParams({ q: q, type: 'artist', limit: 10 })
    const data = await fetch(this.urlApi + "/search?" + params, options)
        .then(res => res.json())
        .then(data => {        
        return data        
    })
    .catch(err => {
        throw err
    });
    return data;
  }

  async getArtist (id) {
    var options = { method: 'GET', headers: this.headers };

    const data = await fetch(this.urlApi + "/artists/" + id, options)
      .then(res => res.json())
      .then(data => {        
      return data        
    })
    .catch(err => {
        throw err
    });
    return data;
  }

  async getArtistAlbums (id) {
    var options = { method: 'GET', headers: this.headers };

    const data = await fetch(this.urlApi + "/artists/" + id +"/albums?limit=10", options)
        .then(res => res.json())
        .then(data => {        
        return data        
    })
    .catch(err => {
        throw err
    });
    return data;
  }
} 

export default SomosClient
