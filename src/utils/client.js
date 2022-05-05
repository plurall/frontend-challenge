import { clearToken, getToken } from 'utils'
import axios from 'axios';

class SomosClient {

  constructor() {}

  onError = error => {}

  async getArtists(searchKey) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    let token = getToken();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })
    return (data.artists.items)
  }

}

export default SomosClient
