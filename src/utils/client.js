import axios from 'axios';
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.baseURL = 'https://api.spotify.com/v1';
  }

  onError = error => { }

  async getArtists(query) {
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
  }

  async getArtist(id) {
    const { data } = await axios.get(`${this.baseURL}/artist/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
    return data;
  }
}

export default SomosClient
