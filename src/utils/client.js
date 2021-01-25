import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() { }

  onError = error => { }

  async getArtists(artist) {
    const token = getToken();

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      return await response.json();

    } catch (error) {
      console.log("Request failed successfully: ", error);
    }
  }


  async getAlbums(id) {
    const token = getToken();

    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      return await response.json();

    } catch (error) {
      console.log("Request failed successfully: ", error);
    }
  }

  async getArtistById(id) {
    const token = getToken();

    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      return await response.json();

    } catch (error) {
      console.log("Request failed successfully: ", error);
    }
  }
}

export default SomosClient
