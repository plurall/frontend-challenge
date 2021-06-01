import axios from 'axios';
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.baseURL = 'https://api.spotify.com/v1';
  }

  onError = error => {
    const { response: { data, status } } = error;
    
    // @TODO return error
    console.log(data);
  }

  async getArtists(query) {
    try {
      const { data } = await axios.get(`${this.baseURL}/search`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        params: {
          q: query,
          type: 'artist'
        }
      });
      return data;
    } catch(err) {
      return this.onError(err);
    }
   
  }

  async getArtist(id) {
    try {
      let { data } = await axios.get(`${this.baseURL}/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      // API call to get albums from the artist
      const { data: { items } } = await axios.get(`${this.baseURL}/artists/${id}/albums`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        params: {
          limit: 10
        }
      });

      // Set albums to the return object
      data.albums = items;

      return data;
    } catch(err) {
      this.onError(err);
    }
    
  }

}

export default SomosClient
