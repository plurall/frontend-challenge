import { getToken } from 'utils'

class SomosClient {
  // eslint-disable-next-line
  constructor() { }

  // eslint-disable-next-line
  onError = error => { }

  // eslint-disable-next-line
  async getArtists(artist) {
    // console.log(token)
    const URL_TO_FETCH = `${process.env.REACT_APP_API_URL}/search?q=${artist}&type=artist`

    const response = await fetch(URL_TO_FETCH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      return response.json()
    // return response.json()
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }
}

export default SomosClient
