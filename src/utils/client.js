import { clearToken} from 'utils'
import api from './api'

class SomosClient {

  onError = error => {
    clearToken()
    console.log(error)
  }

  async getArtists(id) {
    try {
      return api.get(`/artists/${id}`)
    } catch (error) {
      if (error.response) {
        this.onError(error)
      }
    }
  }

  async getArtistAlbums(id) {
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

  async getArtistsSearch(artist) {
    try {
      return api.get(`/search/?type=artist&q=${artist}`, {
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

