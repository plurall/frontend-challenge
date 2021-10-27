import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(query, limit) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    try {
      const token = getToken();

      const response = await fetch(encodeURI(`https://api.spotify.com/v1/search?q=${query}&type=artist&limit=${limit}`), {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }
}

export default SomosClient
