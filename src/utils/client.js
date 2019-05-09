import { clearToken, getToken } from 'utils'
import axios from 'axios'
import Qs from 'qs'

import artistsIds from '../data/artirts'

class SomosClient {
  // constructor() {}

  onError = error => {}

  getArtists = async () => {
    /*
      Obs: para chamadas na api, você já tem o token salvo no cookie,
      `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
      retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    */
    try {
      const config = {
        params: {
          ids: [...artistsIds],
        },
        paramsSerializer: params =>
          Qs.stringify(params, { arrayFormat: 'comma' }),
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
      const response = await axios.get(
        'https://api.spotify.com/v1/artists',
        config,
      )
      return response
    } catch (error) {
      console.error(error)
    }
    // console.log(getToken())
  }

  getArtist = async artistsId => {
    // console.log('GET ARTIST ID', id)
    const { id } = artistsId
    // console.log('ID', id)
    // console.log('TOKEN', getToken())
    // console.log('METHOD GET ARTIST')
    try {
      const config = {
        // params: id,

        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${id}`,
        config,
      )
      console.log('RESPONSE', response)
      return response
    } catch (error) {
      return error
    }
  }

  getAlbums = async artistId => {
    const { id } = artistId

    console.log('TOKEN', getToken())

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${id}/albums`,
        config,
      )
      console.log('RESPONSE', response)
      return response
    } catch (error) {
      return error
    }
  }
}

export default SomosClient
