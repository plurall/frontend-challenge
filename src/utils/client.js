// eslint-disable-next-line
import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SomosClient {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line
  onError = error => {}

  // eslint-disable-next-line
  async getIdsByName(name) {
    try {
      const artistsByName = await axios.get(`https://api.spotify.com/v1/search?q=artist%3A${name}&type=artist`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

      return artistsByName.data.artists.items.reduce((acc, curr, index) => index === 0 ? `${acc}${curr.id}` : `${acc},${curr.id}`, '')
    } catch (error) {
      clearToken()
    }
  }
  // eslint-disable-next-line
  async getArtistsByName(name) {
    try {
      const idList = await this.getIdsByName(name)

      const artists = await axios.get(`https://api.spotify.com/v1/artists?ids=${idList}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

      return artists
    } catch (error) {
      clearToken()
    }
  }
  // eslint-disable-next-line
  async getArtistById(id) {
    try {
      // get albums `https://api.spotify.com/v1/artists/${id}/albums`
      const artist = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

      return artist
    } catch (error) {
      clearToken()
    }
  }
  // eslint-disable-next-line
  async getAlbumsByArtistId(artistId) {
    try {
      const albums = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=10`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

      return albums
    } catch (error) {
      clearToken()
    }
  }
}

export default SomosClient
