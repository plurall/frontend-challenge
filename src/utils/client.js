import axios from 'axios'
import { getToken, clearToken } from 'utils'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

api.interceptors.request.use(config => {
  const newConfig = { ...config }
  newConfig.headers.Authorization = `Bearer ${getToken()}`
  return newConfig
})

class SomosClient {
  onError = error => {
    clearToken()
    console.log(error)
  }

  getArtist = async id => {
    try {
      return api.get(`/artists/${id}`)
    } catch (error) {
      if (error.response) {
        this.onError(error)
      }
    }
  }

  getArtistAlbums = async id => {
    try {
      return api.get(`/artists/${id}/albums`, {
        params: { limit: 10 },
      })
    } catch (error) {
      if (error.response) {
        this.onError(error)
      }
    }
  }

  getArtistBySearch = async term => {
    try {
      return api.get(`/search/?type=artist&q=${term}`, {
        params: { limit: 10 },
      })
    } catch (error) {
      if (error.response) {
        this.onError(error)
      }
    }
  }
}

export default SomosClient
