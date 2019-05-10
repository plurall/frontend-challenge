import { clearToken, getToken, setToken } from 'utils'

class SomosClient {
  constructor() {
  }

  async getArtists(textSearch) {
    let token = await getToken()
    const header = {headers: {
        'Authorization': 'Bearer ' + token
    }}
  
    let listaArtistas = fetch(`https://api.spotify.com/v1/search?q=${textSearch}&type=artist`,
      {...header}
      ).then(response=> response.json())

      return listaArtistas
  }
}

export default SomosClient
