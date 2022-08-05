// eslint-disable-next-line
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor(value) {
    this.value = value
  }

  // eslint-disable-next-line
  onError = error => {}

  async getArtists() {
    const request = await fetch(`https://api.spotify.com/v1/search?q=${this.value}&type=artist`, { headers: { Authorization: `Bearer ${getToken()}` } })
    const requestJson = await request.json()
    return requestJson
  }

  async getArtistById() {
    const request = await fetch(`https://api.spotify.com/v1/artists/${this.value}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    const requestJson = await request.json()
    return requestJson
  }

  async getAlbums() {
    const request = await fetch(`https://api.spotify.com/v1/artists/${this.value}/albums?offset=0&limit=10`, { headers: { Authorization: `Bearer ${getToken()}` } })
    const requestJson = await request.json()
    return requestJson
  }
}

export default SomosClient
