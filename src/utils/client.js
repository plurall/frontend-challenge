// eslint-disable-next-line
import { clearToken, getToken } from 'utils'
import axios from 'axios'

const BASE_URL = 'https://api.spotify.com/v1'

class SomosClient {
  token
  // eslint-disable-next-line
  constructor() {
    this.token = getToken()
  }

  // eslint-disable-next-line
  onError = error => {}

  // eslint-disable-next-line
  async getUser() {
    try {
      const response = await axios.get(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })

      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  // eslint-disable-next-line
  async getOneArtist(id) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/

    try {
      const response = await axios.get(`${BASE_URL}/artists/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })

      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  // eslint-disable-next-line
  async getArtists() {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/

    try {
      const response = await axios.get(
        `${BASE_URL}/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        },
      )

      console.log(response.data)
      return response.data.artists
    } catch (error) {
      console.log(error)
    }
  }
}

export default SomosClient
