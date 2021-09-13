import { clearToken, getToken } from 'utils'

class SomosClient {
  // constructor() { }
  onError = error => { }

  async getArtists() {
    const token = getToken()
    const ids = ["2CIMQHirSU0MQqyYHq0eOx", "57dN52uHvrHOxijz"]
    console.log(token)
    const response = await fetch(`https://api.spotify.com/v1/artists?ids=${ids}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json()
    return data
   // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/

  }
}

export default SomosClient
