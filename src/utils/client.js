import { clearToken, getToken } from 'utils'
import axios from 'axios'

const urlApi =  process.env.REACT_APP_API_URL


class SomosClient {
  constructor() {
    this.token = getToken();
  };

  headersApi() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    };
  };
 
  errorApi() {
    clearToken();
    window.location.reload(false);
  };

  async getArtists(artist) {
    try {
      const res = await axios.get(urlApi+`/search?type=artist&q=${artist}`, 
        this.headersApi()
      );
      return res.data.artists.items;
    } catch(error) {
      this.errorApi()
    };
  };

  async getArtistDetails(details) {
    try {
      const res = await axios.get(urlApi+`/artists/${details}`, 
        this.headersApi()
      );
      return res.data;
    } catch(error) {
      this.errorApi()
    };
  };

  async getArtistAlbums(albums) {
    try {
      const res = await axios.get(urlApi+`/artists/${albums}/albums?limit=10`, 
        this.headersApi()
      );
      return res.data.items;
    } catch(error) {
      this.errorApi()
    };
  };

}

export default SomosClient
