import { clearToken, getToken } from 'utils'
import axios from 'axios'


class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(query) {
    var url = `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=10`

    return axios.get(url, {
        headers: {'Authorization': "Bearer " + getToken()}
    }).then(res => res)
  }

  async getSingleArtist(id) {
    var url = `https://api.spotify.com/v1/artists/${id}`

    return axios.get(url, {
        headers: {'Authorization': "Bearer " + getToken()}
    }).then(res => res)
  }

  async getAlbums(id) {
    var url = `https://api.spotify.com/v1/artists/${id}/albums?limit=10`

    return axios.get(url, {
        headers: {'Authorization': "Bearer " + getToken()}
    }).then(res => res)
  }

  async getAlbumTracks(id) {
    var url = `https://api.spotify.com/v1/albums/${id}/tracks`
    
    return axios.get(url, {
        headers: {'Authorization': "Bearer " + getToken()}
    }).then(res => res)
  }
}

export default SomosClient
