import axios from 'axios'

import { clearToken, getToken } from 'utils'

const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

spotifyInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

class SomosClient {
  static async searchArtists(query) {
    let response
    try {
      response = await spotifyInstance.get('/search', {
        params: {
          q: query,
          type: 'artist',
        },
      })
    } catch (err) {
      throw new Error('Failed to search artists on Spotify.')
    }

    return response.data.artists.items
  }
}

export default SomosClient
