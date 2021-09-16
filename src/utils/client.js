import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.baseURL = 'https://api.spotify.com/v1'
  }

  onError = error => {
      const { response: { data } } = error
  }

  async getArtists(value) {
    try {
      const response = await fetch(
        `${this.baseURL}/search?q=${value}&type=artist`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })

      const data = await response.json()

      return data
    } catch (error) {
      return this.onError(error)
    }
  }

  //função para retornar artista pelo id
  async getArtist(value) {
    try {
      console.log('value', value)
      const response = await fetch(
        `${this.baseURL}/artists/${value}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })

      const data = await response.json()

      return data
    } catch (error) {
      return this.onError(error)
    }
  }

  async getAlbums(value) {
    try {
      const response = await fetch(
        `${this.baseURL}/artists/${value}/albums`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })

      const data = await response.json()

      return data
    } catch (error) {
      return this.onError(error)
    }
  }
}

export default SomosClient
