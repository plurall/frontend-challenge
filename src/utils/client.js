import { clearToken, getToken } from 'utils'
import axios from 'axios'

class SomosClient {
  
  constructor() {}

  onError = error => {}


  async getArtists(nome) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const userToken = getToken();
    let resultado = await axios
    .get('https://api.spotify.com/v1/search', {
      headers: {'Authorization': 'Bearer '+ userToken},
      params: {
        q : nome,
        type: "artist"
      }
    });
    return resultado.data.artists;
  }

  async getArtistById(id) {

    const userToken = getToken();
    let resultado = await axios
    .get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {'Authorization': 'Bearer '+ userToken}
    });
    return resultado;

  }

  async getAlbumByArtistId(idArtist) {

    const userToken = getToken();
    let resultado = await axios
    .get(`https://api.spotify.com/v1/artists/${idArtist}/albums`, {
      headers: {'Authorization': 'Bearer '+ userToken},
      params: {
        limit: 10,
        market: 'ES'
      }
    });
    return resultado;
    
  }
}


export default SomosClient
