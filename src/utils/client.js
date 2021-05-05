import { clearToken } from 'utils'
import axios from './axios-instance'

class SomosClient {
  onError = res => {
    if (res.status === 401) {
      clearToken()
      window.location = '/'
      return
    }

    return 'Opa, deu erro :('
  }

  async getArtists(name, offset = 0) {
    try {
      const result = await axios(
        `/search?q=${name}&type=artist&offset=${offset}`,
      )
      return result.data
    } catch (error) {
      throw this.onError(error.response)
    }
  }

  async getArtistAlbums(id) {
    try {
      const result = await axios.get(`/artists/${id}/albums?limit=10`)
      return result.data
    } catch (error) {
      throw this.onError(error.response)
    }
  }

  async getArtist(id) {
    try {
      const result = await axios.get(`/artists/${id}`)
      return result.data
    } catch (error) {
      throw this.onError(error.response)
    }
  }
}

export default SomosClient
