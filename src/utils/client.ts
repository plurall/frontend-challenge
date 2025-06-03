// eslint-disable-next-line
import api from '../api'
import { clearToken } from './token'

class SomosClient {
  // eslint-disable-next-line
  artist: string
  constructor(artist = 'artist') {
    this.artist = artist
  }

  // eslint-disable-next-line
  onError = (error: unknown) => {
    if (
      error &&
      typeof error === 'object' &&
      'response' in error &&
      (error.response as { status?: number })?.status === 401
    ) {
      clearToken()
      window.location.href = `/error?title=Não autorizado&message=Sua sessão expirou. Clique no botão abaixo para recarregar a página.&status=401`
    }
  }

  // eslint-disable-next-line
  async getArtists(value: string) {
    return api
      .get(`/search?q=${value}&type=${this.artist}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        this.onError(error)
        throw error
      })

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async getArtist(id: string) {
    try {
      const [artistResponse, albunsResponse] = await Promise.all([
        api.get(`/artists/${id}`),
        api.get(`/artists/${id}/albums`),
      ])

      return {
        artista: artistResponse.data,
        albuns: albunsResponse.data.items,
      }
    } catch (error) {
      this.onError(error)
      throw error
    }
  }
}

export default SomosClient
