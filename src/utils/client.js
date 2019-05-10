import { getToken } from 'utils'
import axios from 'axios'
import Qs from 'qs'

import artistsIds from '../data/artirts'

class SomosClient {
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
      throw new Error(
        'Não foi possível carregar os artistas com os IDS solicitados',
      )
    }
  }

  getArtist = async artistsId => {
    const { id } = artistsId
    try {
      const config = {
        params: id,

        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${id}`,
        config,
      )
      return response
    } catch (error) {
      throw new Error('Não foi possível carregar o artista solicitado')
    }
  }

  getAlbums = async artistId => {
    const { id } = artistId
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${id}/albums?limit=10`,
        config,
      )
      return response
    } catch (error) {
      throw new Error('Não foi possível carregar os albunss solicitados')
    }
  }
}

export default SomosClient
