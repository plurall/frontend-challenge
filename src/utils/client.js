import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(name) {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${name}&type=artist`,
      {
        method: 'GET',
        headers: {
         'Authorization': 'Bearer ' + getToken(),
         'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === '401') {
      clearToken();
    } else {
      const json = await response.json();
      return json.artists;
    }
  }

  async getArtist(id) {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        method: 'GET',
        headers: {
         'Authorization': 'Bearer ' + getToken(),
         'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === '401') {
      clearToken();
    } else {
      const json = await response.json();
      return json;
    }
  }

  async getArtistAlbums(id) {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        method: 'GET',
        headers: {
         'Authorization': 'Bearer ' + getToken(),
         'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === '401') {
      clearToken();
    } else {
      const json = await response.json();
      return json;
    }
  }
}

export default SomosClient
