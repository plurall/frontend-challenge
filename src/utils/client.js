import axios from 'axios'

import { clearToken, getToken } from 'utils'

const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

spotifyInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

class Client {
  static async searchArtists(query) {
    let response
    try {
      response = await spotifyInstance.get('/search', {
        params: {
          q: query,
          type: 'artist',
        },
      })
    } catch (error) {
      throw new Error('Failed to search artists on Spotify.')
    }

    return response.data.artists.items
  }

  static async getArtist(id) {
    let response
    try {
      response = await spotifyInstance.get(`/artists/${id}`)
    } catch (error) {
      throw new Error('Failed to get artist on Spotify.')
    }

    return response.data
  }

  static async getArtistAlbums(artistId, limit = 10) {
    let response
    try {
      response = await spotifyInstance.get(`/artists/${artistId}/albums`, {
        params: {
          limit,
        },
      })
    } catch (error) {
      throw new Error('Failed to get artist albums on Spotify.')
    }

    return response.data.items
  }
}

export default Client
