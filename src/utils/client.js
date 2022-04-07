import { getToken } from 'utils'

class SomosClient {
  constructor() {
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    }
  }

  async getArtists(value) {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${value}&type=artist`,
      {
        method: 'GET',
        headers: this.headers,
      },
    )
    const data = await response.json()

    return data

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async showArtist(id) {
    const responseArtist = await fetch(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        method: 'GET',
        headers: this.headers,
      },
    )

    const artist = await responseArtist.json()

    return artist
  }
  async getArtistAlbums(id) {
    const responseAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${id}/albums?limit=10`,
      {
        method: 'GET',
        headers: this.headers,
      },
    )

    const albums = await responseAlbums.json()

    return albums
  }
}

export default SomosClient
