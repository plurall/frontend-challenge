import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {
    console.warn(error)
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
      ).then(res => res.json())
    } catch (error) {
      this.onError(error)
    }
  }

  async getArtistById(artistId) {
    try {
      return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        method: 'GET',
      }).then(res => res.json())
    } catch (error) {
      this.onError(error)
    }
  }

  async getArtistAlbums(artistId) {
    try {
      return fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        method: 'GET',
      }).then(res => res.json())
    } catch (error) {
      this.onError(error)
    }
  }
}

export default SomosClient
