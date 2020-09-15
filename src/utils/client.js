import { getToken } from 'utils'

import api from '../service/api'

class SomosClient {
  async getArtists(artists) {
    this.artists = artists

    try {
      const response = await api.get(
        `/search?type=artist&q=${this.artists}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )

      return response.data

    } catch (error) {
      return error
    }
  }

  async showArtist(id) {
    this.id = id

    try {
      const response = await api.get(
        `/artists/${this.id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )

      return response.data
    } catch (error) {
      return error
    }
  }

  async getArtistAlbums(id) {
    this.id = id

    try {
      const response = await api.get(
        `/artists/${this.id}/albums?limit=10`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )

      return response.data
    } catch (error) {
      return error
    }
  }
}




export default SomosClient
