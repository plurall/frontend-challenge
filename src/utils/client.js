import { getToken } from 'utils'
import queryString from 'query-string'

class ClientError extends Error {
  constructor(status, error, message) {
    super(message || '')
    this.status = status
    this.error = error || ''
  }
}

/**
 * Client that interfaces the spotify REST api
 */

class SpotifyClient {
  constructor({ baseURL, token } = {}) {
    this.baseURL = baseURL || process.env.REACT_APP_API_URL
    this.token = token || getToken()
  }

  /**
   * Get a list of artists with aditional pagination information
   * @param {*} name the artist name to filter the list
   * @param {*} options pagination options (i.e. `limit` and `page`)
   * @returns a promise of artists and pagination info
   */

  async getArtistsByName(name, options = {}) {
    const query = queryString.stringify({
      ...SpotifyClient.formatOptions(options),
      type: 'artist',
      q: name.toLocaleLowerCase(),
    })

    const headers = this.getAuthHeaders()
    const url = `${this.baseURL}/search?${query}`

    const response = await fetch(url, { headers })
    const data = await response.json()

    if (!response.ok) {
      throw new ClientError(response.status, data.error, data.error.message)
    }

    return SpotifyClient.formatResponse(data.artists)
  }

  /**
   * Get and spotify artist by id
   * @param {*} id spotify unique identifier
   * @returns a artist promise
   */

  async getArtistById(id) {
    const headers = this.getAuthHeaders()
    const url = `${this.baseURL}/artists/${id}`

    const response = await fetch(url, { headers })
    const data = await response.json()

    if (!response.ok) {
      throw new ClientError(response.status, data.error, data.error.message)
    }

    return data
  }

  /**
   * Get a list of artist albums with aditional pagination information
   * @param {*} id the artist id
   * @param {*} options pagination options (i.e. `limit` and `page`)
   * @returns a promise of artist albums and pagination info
   */

  async getArtistAlbumsById(id, options = {}) {
    const query = queryString.stringify(SpotifyClient.formatOptions(options))
    const headers = this.getAuthHeaders()
    const url = `${this.baseURL}/artists/${id}/albums?${query}`

    const response = await fetch(url, { headers })
    const data = await response.json()

    if (!response.ok) {
      throw new ClientError(response.status, data.error, data.error.message)
    }

    return SpotifyClient.formatResponse(data)
  }

  getAuthHeaders() {
    return { Authorization: `Bearer ${this.token}` }
  }

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

export { SpotifyClient, ClientError }
