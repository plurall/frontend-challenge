import api from './api'

class SomosClient {
  constructor () {
    this.getArtists = this.getArtists.bind(this)
  }

  onError = (error: any) => {
    console.log(error)
  }

  // eslint-disable-next-line class-methods-use-this
  async getArtists () {
    try {
      const artists = await api.get('artists/?ids=0oSGxfWSnnOXhD2fKuz2Gy%2C3dBVyJ7JuOMt4GE9607Qin')
      console.log(artists)
    } catch (error) {
      console.log(error.message)
    }

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }
}

export default SomosClient
