import axios from 'axios'
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.spotifyApi = this.getApi()
  }

  getApi = () => {
    const axiosPrivate = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    })

    axiosPrivate.interceptors.request.use(config => {
      try {
        const newConfig = {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${getToken()}`,
          },
        }

        return newConfig
      } catch (error) {
        return config
      }
    })

    return axiosPrivate
  }

  onError = () => {
    clearToken()
  }

  async getArtists(params) {
    try {
      const response = await this.spotifyApi.get('/search', { params })

      return response
    } catch (error) {
      return this.onError()
    }
  }

  async getArtistDetail(artistId) {
    try {
      const response = await this.spotifyApi.get(`/artists/${artistId}`)

      return response
    } catch (error) {
      return this.onError()
    }
  }

  async getArtistAlbums(params) {
    const { artistId, ...restParams } = params

    try {
      const response = await this.spotifyApi.get(
        `/artists/${artistId}/albums`,
        { params: restParams },
      )

      return response
    } catch (error) {
      return this.onError()
    }
  }
}

export default SomosClient
