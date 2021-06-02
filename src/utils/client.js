import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor(accessToken = '') {
    this.token = accessToken || getToken()
  }

  async getArtists(artist = '') {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
        {
          method: 'get',
          headers: new Headers({
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          }),
        },
      )
        .then(responseAPI => responseAPI.json())
        .then(data => data.artists.items)

      return response
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Não conseguimos te autenticar. Por favor, reconecte-se')
      clearToken()
      return []
    }
  }

  async getArtist() {
    return this.token 
  }
}

export default SomosClient
