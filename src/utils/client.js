import { getToken } from 'utils'

class SpotifyClient {
  baseURL = process.env.REACT_APP_API_URL

  token = getToken()

  async getArtistsByName(name, options = {}) {
    const query = SpotifyClient.formatQuery({
      ...SpotifyClient.formatOptions(options),
      type: 'artist',
      q: name,
    })
    const headers = this.getAuthHeaders()
    const url = `${this.baseURL}/search?${query}`

    const response = await fetch(url, { headers })
    const data = await response.json()

    return SpotifyClient.formatResponse(data.artists)
  }

  async getArtistById(id) {
    const headers = this.getAuthHeaders()
    const url = `${this.baseURL}/artists/${id}`

    const response = await fetch(url, { headers })
    const data = await response.json()

    return data
  }

  async getArtistAlbums(id, options = {}) {
    const query = SpotifyClient.formatQuery(
      SpotifyClient.formatOptions(options),
    )
    const headers = this.getAuthHeaders()
    const url = `${this.baseURL}/artists/${id}/albums?${query}`

    const response = await fetch(url, { headers })
    const data = await response.json()

    return SpotifyClient.formatResponse(data)
  }

  getAuthHeaders() {
    return {
      Authorization: `Bearer ${this.token}`,
    }
  }

  static formatQuery = query =>
    Object.keys(query)
      .map(key => `${key}=${encodeURI(query[key])}`)
      .join('&')

  static formatResponse = response => {
    const { total, limit, offset, items } = response
    const page = Math.round(offset / limit) + 1
    const pages = Math.ceil(total / limit)

    return { items, page, pages, limit, total }
  }

  static formatOptions = options => {
    const limit = options.limit || 10
    const offset = ((options.page || 1) - 1) * limit

    return { limit, offset }
  }
}

export default SpotifyClient
