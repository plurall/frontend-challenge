import axios from 'axios';
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.source = axios.CancelToken.source();
    this.header = {
      'Content-Type': 'application/json',
      cancelToken: this.source.token,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }

    this.language = navigator.language

    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    })
  }

  async getUser() {
    try {
      const response = await this.api.get('/me', this.header)
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
      const response = await this.api.get(`/search${query}`, this.header)
      return response
    } catch (error) {
      console.log(error)
      if (error.message !== "canceled" && error.response.status === 401) {
        clearToken()
        window.location.href = '/'
      }
    }
  }

  async getArtistById(id) {
    try {
      const response = await this.api.get(`/artists/${id}`, this.header)
      return response
    } catch (error) {
      console.log(error)
      if (error.message !== "canceled" && error.response.status === 401) {
        clearToken()
        window.location.href = '/'
      }
    }
  }

  async getAlbumsByArtistId(id) {
    try {
      const response = await this.api.get(`/artists/${id}/albums?limit=10&offset=0`, this.header)
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
