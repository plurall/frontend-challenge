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

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }
}

export default SomosClient
