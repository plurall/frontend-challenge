import { getToken } from 'utils'

class SomosClient {
  async getSpotify(path) {
    const fetchResponse = await fetch(`https://api.spotify.com/v1/${path}`, {
      headers: new Headers({
        Authorization: `Bearer ${getToken()}`,
      }),
    })

    return await fetchResponse.json()
  }

  async getArtists(query) {
    return await this.getSpotify(`search?q=${query}&type=artist`)
  }

  async getArtist(id) {
    return await this.getSpotify(`artists/${id}`)
  }

  async getArtistAlbums(id) {
    return await this.getSpotify(`artists/${id}/albums?limit=10`)
  }
}

export default SomosClient
