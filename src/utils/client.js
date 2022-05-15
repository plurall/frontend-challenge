import { clearToken, getToken } from 'utils'
import { api, source } from './api'

class SomosClient {
  constructor() {
    this.header = {
      'Content-Type': 'application/json',
      cancelToken: source.token,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }

    this.language = navigator.language
  }

  async getUser() {
    try {
      const response = await api.get('/me', this.header)
      return response
    } catch (error) {
      console.log(error)
      if (error.message !== "canceled" && error.response.status === 401) {
        clearToken()
        window.location.href = '/'
      }
    }
  }

  async getArtists(query) {
    try {
      const response = await api.get(`/search${query}`, this.header)
      return response
    } catch (error) {
      console.log(error)
      if (error.message !== "canceled" && error.response.status === 401) {
        clearToken()
        window.location.href = '/'
      }
    }
  }
}

export default SomosClient
