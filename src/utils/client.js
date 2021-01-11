import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SomosClient {
  constructor() {
    this.artists = {}
    this.getArtists = this.getArtists.bind(this)

    this.artist = {}
    this.getArtist = this.getArtist.bind(this)

    this.albums = {}
    this.getAlbumsFromArtist = this.getAlbumsFromArtist.bind(this)
  }

  onError = error => {}

  async getArtists(artistName) {
    const token = getToken()
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    await axios.get(`${process.env.REACT_APP_API_URL}/search?q=${artistName}&type=artist`, config)
      .then(res => {
        this.artists = res.data
        return this.artists
      })
  }

  async getArtist(id) {
    const token = getToken()
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    await axios.get(`${process.env.REACT_APP_API_URL}/artists/${id}`, config)
      .then(res => {
        this.artist = res.data
        return this.artist
      })
  }

  async getAlbumsFromArtist(id) {
    const token = getToken()
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    await axios.get(`${process.env.REACT_APP_API_URL}/artists/${id}/albums`, config)
      .then(res => {
        this.albums = res.data
        return this.albums
      })
  }
}

export default SomosClient
