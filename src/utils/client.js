import axios from 'axios'
import { clearToken, getToken } from './token'

class SomosClient {

  constructor() { }

  configApi = () => {
    const token = getToken()

    return axios.create({
      baseURL: 'https://api.spotify.com/v1',
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      }
    })
  }

  onError = error => { }

  async getArtists(name) {
    const api = this.configApi()
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    try {
      const res = await api.get(`/search?q=${name}&type=artist`)
      return { artists: res.data.artists.items }
    } catch (error) {
      return { error }
    }
  }

  async getArtistById(id) {
    const api = this.configApi()

    try {
      const res = await api.get(`/artists/${id}`)
      return { artist: res.data }
    } catch (error) {
      return { error }
    }
  }

  async getAlbums(id) {
    const api = this.configApi()

    try {
      const res = await api.get(`/artists/${id}/albums?limit=10`)
      return { albums: res.data.items }
    } catch (error) {
      return { error }
    }
  }
}

export default SomosClient
