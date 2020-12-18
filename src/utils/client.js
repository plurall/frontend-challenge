import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {

  }

  onError = error => {
    clearToken()
  }

  async getArtists(artistName) {
    const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    const access_token = getToken();

    try {
      const response = await fetch(url,
        {
          method: 'GET',
          headers: {
           'Authorization': `Bearer ${access_token}`,
           'Content-Type': 'application/json'
          }
        }
      );

      const json = await response.json();
      return json.artists;

    } catch (error) {
      return this.onError()
    }
  }

  async getArtistInfo(artistId) {
    const url = `https://api.spotify.com/v1/artists/${artistId}`;
    const access_token = getToken();

    const response = await fetch(url,
      {
        method: 'GET',
        headers: {
         'Authorization': `Bearer ${access_token}`,
         'Content-Type': 'application/json'
        }
      }
    );

    const json = await response.json();
    return json;
  }
}

export default SomosClient
