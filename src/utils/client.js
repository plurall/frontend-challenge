// eslint-disable-next-line
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.accessToken = getToken()
    this.baseURL = 'https://api.spotify.com/v1'
  }

  // eslint-disable-next-line
  onError = error => {}

  async getArtists(searchTerm) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const response = await fetch(
      `${this.baseURL}/search?q=${searchTerm}&type=artist`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    )

    const contentType = response.headers.get('Content-Type')

    let responseBody = null

    if (contentType.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      const artists = responseBody.artists.items
      return artists
    }

    if (response.status === 401) {
      clearToken()
    }

    throw new Error(response, responseBody)
  }
}

export default new SomosClient()
