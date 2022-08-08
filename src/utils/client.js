import { getToken } from 'utils'

class SomosClient {
  // eslint-disable-next-line
  async getArtists(term) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
    const token = getToken()
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${term}&type=artist&limit=10`,
      config,
    )

    if (res.status === 200) {
      const items = []
      const data = await res.json()
      data.artists.items.map(item =>
        item.images.length !== 0 ? items.push(item) : '',
      )

      return items
    }

    return null
  }

  // eslint-disable-next-line
  async getArtistsById(artistsID) {
    const token = getToken()
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const res = await fetch(
      `https://api.spotify.com/v1/artists/${artistsID}`,
      config,
    )

    if (res.status === 200) {
      const data = await res.json()
      if (data.image !== '') {
        return data
      }
    }

    return null
  }

  // eslint-disable-next-line
  async getArtistsAlbums(artistsID) {
    const token = getToken()
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const res = await fetch(
      `https://api.spotify.com/v1/artists/${artistsID}/albums?include_groups=album&limit=10`,
      config,
    )

    if (res.status === 200) {
      const data = await res.json()
      return data
    }

    return null
  }
}

export default SomosClient
