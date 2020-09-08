import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SomosClient {
  constructor() {
    this.token = getToken();
  }

  onError = error => {
    clearToken();
    console.log(error);
    window.location.reload(true);
  }

  async getArtists(name) {
    try {
      const result = await axios.get(`https://api.spotify.com/v1/search?type=artist&q=${name}`, this.axiosRequestConfig());
      return result.data.artists.items;
    } catch (error) {
      if (error.response) {
        this.onError(error);
      }
    }
  }

  async getArtistById(id) {
    try {
      const result = await axios.get(`https://api.spotify.com/v1/artists/${id}`, this.axiosRequestConfig());
      return result.data;
    } catch (error) {
      if (error.response) {
        this.onError(error);
      }
    }
  }

  async getArtistAlbums(id) {
    try {
      const result = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=10`, this.axiosRequestConfig());
      return result.data.items;
    } catch (error) {
      if (error.response) {
        this.onError(error);
      }
    }
  }

  axiosRequestConfig() {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    };
  }
}

export default SomosClient
