import { getToken } from 'utils'

class SomosClient {
  constructor() {
    this.baseURL = 'https://api.spotify.com/v1'
  }

  onError = error => {
    const {
      response: { data },
    } = error

    return data.error.message
  }

  async getArtists(term) {
    try {
      const response = await fetch(
        `${this.baseURL}/search?q=${term}&type=artist`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )
      const result = await response.json()

      return result
    } catch {
      return this.onError
    }
  }

  async getArtistDetails(artistId) {
    try {
      const response = await fetch(`${this.baseURL}/artists/${artistId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      const result = await response.json()

      return result
    } catch (error) {
      return this.onError
    }
  }

  async getArtistAlbums(artistId) {
    try {
      const response = await fetch(
        `${this.baseURL}/artists/${artistId}/albums?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )
      const result = await response.json()

      return result
    } catch (error) {
      return this.onError
    }
  }
}

export default SomosClient
