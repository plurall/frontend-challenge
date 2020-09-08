import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SomosClient {
  constructor() {
    this.token = getToken();
  }

  onError = error => {
    clearToken();
    console.log(error);
  }

  async getArtists(name) {
    try {
      const result = await axios.get(`https://api.spotify.com/v1/search?type=artist&q=${name}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      });
      return result.data.artists.items;
    } catch (error) {
      if (error.response) {
        this.onError(error);
      }
    }
  }
}

export default SomosClient
