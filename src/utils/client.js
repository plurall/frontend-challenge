import axios from 'axios'
import { getToken } from '../utils'

class SomosClient {
  constructor() {
    console.log()
  }

  onError = error => {
    console.log(error)
  }

  async searchArtistiId(id) {
    const token_Authorize = getToken()
    const BASE_URL = 'https://api.spotify.com/v1'
    try {
      const res = await axios.get(`${BASE_URL}/artists/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer  ${token_Authorize}`,
        },
      })

      const json = res.data
      return json
    } catch (error) {
      if (error.response) {
        console.log(error.message)
        return false
      }
    }
  }

  async getSearchAlbum(id) {
    console.log('ei')
    const token_Authorize = getToken()
    const BASE_URL = 'https://api.spotify.com/v1'
    try {
      const res = await axios.get(
        `${BASE_URL}/artists/${id}/albums?limite=10`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token_Authorize}`,
          },
        },
      )

      const json = res.data.items
      return json
    } catch (error) {
      if (error.response) {
        console.log(error.message)
        return false
      }
    }
  }

  async getArtistsName(keyword) {
    const BASE_URL = 'https://api.spotify.com/v1'
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const token_Authorize = getToken()
    try {
      const res = await axios.get(
        `${BASE_URL}/search?q=${keyword}&type=artist`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token_Authorize}`,
          },
        },
      )
      const json = res.data.artists.items
      return json
    } catch (error) {
      console.log(error.message)
      return false
    }
  }
}

export default SomosClient
