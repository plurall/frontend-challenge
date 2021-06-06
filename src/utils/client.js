import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SomosClient {
  static logout() {
    clearToken()
  }

  static getAuthorizationHeader() {
    return {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  }

  static getArtists(query) {
    return `${process.env.REACT_APP_API_URL}/search?query=${query}&type=artist&market=US&offset=5&limit=8`
  }
  static getDetailsArtists(id) {
    return `${process.env.REACT_APP_API_URL}/artists/${id}`
  }
  static getDetailsArtistsAlbum(id) {
    return `${process.env.REACT_APP_API_URL}/artists/${id}/albums?limit=10`
  }

  static searchArtists(query) {
    return axios.get(this.getArtists(query), this.getAuthorizationHeader())
  }

  static searchDetailsArtists(id) {
    return axios.get(this.getDetailsArtists(id), this.getAuthorizationHeader())
  }

  static searchDetailsArtistsAlbum(id) {
    return axios.get(
      this.getDetailsArtistsAlbum(id),
      this.getAuthorizationHeader(),
    )
  }

  onError = error => {}
}

export default SomosClient
