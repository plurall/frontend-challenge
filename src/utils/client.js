import { getToken } from 'utils'

class SomosClient {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line
  onError = error => {}

  async fetchWithAuth(url) {
    const token = getToken()
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      this.onError(error)
      throw error
    }
  }

  async searchArtists(query) {
    if (!query || query.length < 4) return { artists: { items: [] } }

    const url = `https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(query)}`
    return this.fetchWithAuth(url)
  }

  async getArtist(id) {
    const url = `https://api.spotify.com/v1/artists/${id}`
    return this.fetchWithAuth(url)
  }

  async getArtistAlbums(id, limit = 10) {
    const url = `https://api.spotify.com/v1/artists/${id}/albums?limit=${limit}`
    return this.fetchWithAuth(url)
  }
}

export default SomosClient
