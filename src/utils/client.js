// eslint-disable-next-line
import { clearToken, getToken } from 'utils'

class SomosClient {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line
  onError = error => {}

  // eslint-disable-next-line
  async getArtists(searchText) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const accessToken = getToken()
    const response = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${searchText}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
    return response.json()
  }

  // eslint-disable-next-line
  async getArtist(searchArtist) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const accessToken = getToken()
    const response = await fetch(`https://api.spotify.com/v1/artists/${searchArtist}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
    return response.json()
  }

  // eslint-disable-next-line
  async getAlbum(searchArtist) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const accessToken = getToken()
    const response = await fetch(`https://api.spotify.com/v1/artists/${searchArtist}/albums?limit=10`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
    return response.json()
  }
}

export default SomosClient
