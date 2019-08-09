import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SpotifyClient {
  constructor() {
    this.token = getToken()
  }

  onError = error => {
    console.log(error)
    clearToken()
    window.location.reload(true)
  }

  async getArtists(q) {
    const result = await axios
      .get(`https://api.spotify.com/v1/search?type=artist&q=${q}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      })
      .catch(error => {
        if (error.response) {
          this.onError()
        }
      })

    return result.data.artists
  }

  async getArtist(id) {
    const result = await axios
      .get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      })
      .catch(error => {
        if (error.response) {
          this.onError()
        }
      })

    return result.data
  }

  async getArtistAlbums(id) {
    const result = await axios
      .get(`https://api.spotify.com/v1/artists/${id}/albums?limit=10`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      })
      .catch(error => {
        if (error.response) {
          this.onError()
        }
      })

    return result.data.items
  }
}

export default SpotifyClient
