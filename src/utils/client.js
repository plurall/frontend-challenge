import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getSpotify(path) {
    const fetchResponse = await fetch(`https://api.spotify.com/v1/${path}`, {
      headers: new Headers({
        Authorization: `Bearer ${getToken()}`,
      }),
    })

    if (!fetchResponse.ok) throw Error(fetchResponse.statusText)

    return await fetchResponse.json()
  }

  async getArtists(query) {
    return await this.getSpotify(`search?q=${query}&type=artist`)
  }

  async getArtist(id) {
    return await this.getSpotify(`artists/${id}`)
  }

  async getArtistAlbums(id) {
    return await this.getSpotify(`artists/${id}/albums`)
  }
}

export default SomosClient
