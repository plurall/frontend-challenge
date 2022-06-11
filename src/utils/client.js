import { getToken } from 'utils'

class SomosClient {
  constructor() {
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    }
  }

  onError = error => {}

  async getArtists(artist) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
        {
          method: 'GET',
          headers: this.headers,
        },
      ).catch(function(error) {
        console.log(error)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async showArtist(artist_id) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artist_id}`,
        {
          method: 'GET',
          headers: this.headers,
        },
      )

      const data = await response.json()

      return data
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  
  async getArtistAlbums(album_id) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${album_id}/albums?limit=10`,
        {
          method: 'GET',
          headers: this.headers,
        },
      )

      const data = await response.json()

      return data
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

}

export default SomosClient
