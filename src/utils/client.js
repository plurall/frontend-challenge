import axios from 'axios'
import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() { }

  onError = error => { }

  async getArtists(name) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const token = getToken();

    //return axios.get(`https://api.spotify.com/v1/artists?ids=${[...artists]}`, {
    return axios.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      }
    })
  }
}

export default SomosClient
