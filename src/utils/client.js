import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(query) {
    const fetchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=artist`,
      {
        headers: new Headers({
          Authorization: `Bearer ${getToken()}`,
        }),
      },
    )

    const response = await fetchResponse.json()

    return response
  }
}

export default SomosClient
