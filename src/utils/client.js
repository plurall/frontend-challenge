import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async apiQuery(query) {
    try {
      const token = getToken();

      const response = await fetch(encodeURI(query), {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      return response.json()

    } catch (err) {
      console.log(err)
    }
  }

  getArtists(query, limit) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=${limit}`
    return this.apiQuery(url)
  }

  getArtist(id) {
    const url = `https://api.spotify.com/v1/artists/${id}`
    return this.apiQuery(url)
  }
  
  getArtistAlbums(id) {
    const url = `https://api.spotify.com/v1/artists/${id}/albums`
    return this.apiQuery(url)
  }
}

export default SomosClient
