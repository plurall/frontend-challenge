// eslint-disable-next-line
import { SpotifyArtistDetailsResponse } from 'types/artist'
import { clearToken, getToken } from './token'

const BASE_URL = 'https://api.spotify.com/v1'

/*
  Nao utilizei este exemplo para conseguir exemplificar a configuracao do service e uma arquitetura minima para o react query
*/
class SomosClient {
  constructor() {}

  private getAuthHeaders() {
    const token = getToken()
    return {
      Authorization: `Bearer ${token}`,
    }
  }

  async getArtists(ids: string[]): Promise<any> {
    const response = await fetch(`${BASE_URL}/artists?ids=${ids.join(',')}`, {
      headers: this.getAuthHeaders(),
    })

    if (!response.ok) {
      this.onError(response)
      throw new Error('Erro ao buscar artistas')
    }

    return response.json()
  }

  async getArtistDetails(artistId: string): Promise<SpotifyArtistDetailsResponse> {
    const [artistRes, albumsRes] = await Promise.all([
      fetch(`${BASE_URL}/artists/${artistId}`, {
        headers: this.getAuthHeaders(),
      }),
      fetch(`${BASE_URL}/artists/${artistId}/albums?limit=10&include_groups=album`, {
        headers: this.getAuthHeaders(),
      }),
    ])

    if (!artistRes.ok || !albumsRes.ok) {
      this.onError({ artist: artistRes, albums: albumsRes })
      throw new Error('Erro ao buscar detalhes do artista')
    }

    const artist = await artistRes.json()
    const albumsData = await albumsRes.json()

    return {
      artist,
      albums: albumsData.items,
    }
  }

  onError(error: unknown) {
    console.error('Spotify API error', error)
    clearToken()
  }
}

const somosClient = new SomosClient()

export default somosClient
