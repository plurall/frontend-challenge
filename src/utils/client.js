// eslint-disable-next-line
import { clearToken, getToken } from 'utils'

class SomosClient {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line
  onError = error => {}

  // eslint-disable-next-line
  async getArtists() {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }
}

export default SomosClient
