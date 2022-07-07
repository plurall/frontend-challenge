import HttpClient from './utils/HttpClient'

class SpotifyService {
  constructor() {
    this.httpClient = new HttpClient('https://api.spotify.com/v1')
  }

  getArtists(searchTerm) {
    return this.httpClient.get(`/search?q=${searchTerm}&type=artist`)
  }

  getArtistById(id) {
    return this.httpClient.get(`/artists/${id}`)
  }

  getArtistAlbum(id) {
    return this.httpClient.get(`/artists/${id}/albums?limit=10`)
  }
}

export default new SpotifyService()
