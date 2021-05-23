import axios from 'axios'

import { clearToken, getToken } from 'utils'

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
    return `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=8`
  }

  static searchArtists(query) {
    return axios.get(
      this.getArtists(query),
      this.getAuthorizationHeader(),
    ).catch(error => this.onError(error))
  }

  static getDetailsArtists(id) {
    return `https://api.spotify.com/v1/artists/${id}`
  }

  static searchDetailsArtists(id) {
    return axios.get(
      this.getDetailsArtists(id),
      this.getAuthorizationHeader(),
    ).catch(error => this.onError(error))
  }

  static getAlbumsArtists(id) {
    return `https://api.spotify.com/v1/artists/${id}/albums?limit=10`
  }

  static searchAlbumsArtist(id) {
    return axios.get(
      this.getAlbumsArtists(id),
      this.getAuthorizationHeader(),
    ).catch(error => this.onError(error))
  }

  // Reference: https://github.com/axios/axios#handling-errors
  static onError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
}

export default SomosClient
