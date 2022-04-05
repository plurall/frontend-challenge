import {
  clearToken,
  getToken,
  ErrorHandler
} from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}
  async apiGateway(method, urlParams) {
    const URL = `${process.env.REACT_APP_API_URL}/${urlParams}`
    const response = await fetch(URL, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + getToken(),
      },
    });
    if (response.status === 401) {
      ErrorHandler.handleRequestError(response);
    }
    return response.json();
  }

  async searchArtists(artistName, type = "artist", limit = 10) {
    return this.apiGateway('GET', `search?query=${encodeURIComponent(artistName)}&type=${type}&limit=${limit}`);
  }

  async getArtist(nomeArtista) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/ 
    return this.apiGateway('GET', `artists?ids=${nomeArtista}`);
  }

  async getArtistAlbuns(idArtista, limit = 10) {
    return this.apiGateway('GET', `artists/${idArtista}/albums?limit=${limit}`);
  }

}

export default SomosClient
