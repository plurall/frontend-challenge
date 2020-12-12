import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists() {
    await fetch(
        'https://developer.spotify.com/console/get-several-artists/',
        {
          method: 'GET',
          headers: {
           'Authorization': 'Bearer '+getToken(),
           'Content-Type': 'application/json'
          }
        }
      )
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas -
  }
}

export default SomosClient
