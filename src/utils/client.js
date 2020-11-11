import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {
    console.warn(error)
    clearToken()
  }

  async getArtists(searchQuery) {
    try {
      return fetch(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
          method: 'GET',
        },
      ).then(res => console.log(res.json()))
    } catch (error) {
      console.log('error', error)
    }
  }

  async getArtistById(artistId) {
    try {
      return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        method: 'GET',
      }).then(res => console.log(res.json()))
    } catch (error) {
      console.log('error', error)
    }
  }

  async getArtistAlbums(artistId) {
    try {
      return fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        method: 'GET',
      }).then(res => console.log(res.json()))
    } catch (error) {
      console.log('error', error)
    }
  }
}

export default SomosClient
