import { clearToken, getToken, getOauthClient, albumsDto, artistsDto, artistDto } from 'utils'

class SomosClient {
  constructor() {
    this.UNAUTHORIZED_STATUS = 401
  }

  onError = ({ status }) => {
    const OAuth = getOauthClient()

    if (status === this.UNAUTHORIZED_STATUS) {
      clearToken()
      window.location.href = OAuth.token.getUri()
    }
  }

  async getArtists(query) {
    this.url = `https://api.spotify.com/v1/search?q=${query}&type=artist`
    this.authorization = `Bearer ${getToken()}`
    this.params = {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authorization,
      },
    }

    return fetch(this.url, this.params)
      .then(response => {
        if (response.ok) {
          return response.json().then(result => artistsDto(result))
        }

        return response.json().then(error => this.onError(error.error))
      })
  }

  async getArtist(id) {
    this.url = `https://api.spotify.com/v1/artists/${id}`
    this.authorization = `Bearer ${getToken()}`
    this.params = {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authorization,
      },
    }

    return fetch(this.url, this.params)
      .then(response => {
        if (response.ok) {
          return response.json().then(result => artistDto(result))
        }

        return response.json().then(error => this.onError(error.error))
      })
  }

  async getAlbums(id) {
    this.url = `https://api.spotify.com/v1/artists/${id}/albums?limit=10`
    this.authorization = `Bearer ${getToken()}`
    this.params = {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authorization,
      },
    }

    return fetch(this.url, this.params)
      .then(response => {
        if (response.ok) {
          return response.json().then(result => albumsDto(result))
        }

        return response.json().then(error => this.onError(error.error))
      })
  }
}


export default SomosClient
