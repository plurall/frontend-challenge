import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.access_token = getToken();
    this.headers = {
      method: 'GET',
      headers: {
       'Authorization': `Bearer ${this.access_token}`,
       'Content-Type': 'application/json'
      }
    }
  }

  onError = error => {
  }

  async getArtists(artistName) {
    const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

      const response = await fetch(url, this.headers).catch(function(error) {
        // Error handling here!
        clearToken()
    });

      const json = await response.json();
      return json.artists;
  }

  async getArtistInfo(artistId) {
    const url = `https://api.spotify.com/v1/artists/${artistId}`;
    const response = await fetch(url, this.headers);

    const json = await response.json();
    return json;
  }

  async getArtistAlbums(artistId) {
    const url = `https://api.spotify.com/v1/artists/${artistId}/albums?limit=10`;
    const response = await fetch(url, this.headers);

    const json = await response.json();
    return json;
  }
}

export default SomosClient
