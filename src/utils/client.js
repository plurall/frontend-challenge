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
    let { data } = await axios.get(`${this.baseURL}/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
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
  }

}

export default SomosClient
