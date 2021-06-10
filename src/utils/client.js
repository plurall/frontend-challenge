/* eslint-disable consistent-return */
import { clearToken } from 'utils'

import api from './api'
import { getToken } from './token'

class SomosClient {
  onError = error => {
    clearToken()
    // eslint-disable-next-line no-console
    console.error(error)
  }

  async getArtistsSearch(artistName) {
    try {
      return await api.get('search', {
        params: {
          q: artistName,
          type: 'artist',
          limit: 10,
        },
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    } catch (err) {
      if (err.response) {
        return this.onError(err)
      }
    }
  }

  async getArtist(id) {
    try {
      return api.get(`artists/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    } catch (err) {
      if (err.response) {
        return this.onError(err)
      }
    }
  }

  async getArtistAlbums(id) {
    try {
      return api.get(`artists/${id}/albums`, {
        params: { limit: 10 },
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    } catch (err) {
      if (err.response) {
        return this.onError(err)
      }
    }
  }
}

export default SomosClient
