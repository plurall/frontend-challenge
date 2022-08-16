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
  async searchArtists(name) {
    try {
      const response = await axios.get(
        `${BASE_URL}/search?q=${name}&type=artist&limit=5`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        },
      )

      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

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
  async getArtistAlbum(id) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/

    try {
      const response = await axios.get(
        `${BASE_URL}/artists/${id}/albums?limit=10`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        },
      )

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
        `${BASE_URL}/artists?ids=2JnNhPT0sQvhKOyLqDKRuP,2PLF4pjm6A5eztTVbt9ou4,1w5Kfo2jwwIPruYS2UWh56,0slVGXBggrLglTLNKbeEyW,6olE6TJLqED3rqDCT0FyPh,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0TnOYISbd1XYRBk9myaseg`,
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
