import { clearToken, getToken, setToken } from 'utils'

class SomosClient {
  constructor() {
    this.header = {headers: {
      'Authorization': 'Bearer ' + getToken()
    }}
  }

  async getArtists(textSearch) {
    let listaArtistas = await fetch(`https://api.spotify.com/v1/search?q=${textSearch}&type=artist`,{...this.header})
    return listaArtistas.json()
  }

  async getArtist(artista) {
    let artistaResponse = await fetch(`https://api.spotify.com/v1/artists/${artista}`,{...this.header})
    return artistaResponse.json()
  }
  
  async getAlbuns(artistaID) {
      let listaAlbuns = await fetch(`https://api.spotify.com/v1/artists/${artistaID}/albums`,{...this.header})
      return await listaAlbuns.json()
  }
}

export default SomosClient
