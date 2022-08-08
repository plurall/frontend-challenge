// eslint-disable-next-line
import { clearToken, getToken } from 'utils'
import api from './api'

class SomosClient {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line
  onError = error => {}

  // eslint-disable-next-line
  async getArtists() {
    const { data } = await api.get('artists', {
      params: {
        ids:
          '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
      },
    })
    return data
  }

  // eslint-disable-next-line class-methods-use-this
  async getArtistsByName(name) {
    const { data } = await api.get('search', {
      params: {
        q: name,
        type: 'artist',
      },
    })
    return data
  }

  // eslint-disable-next-line class-methods-use-this
  async getArtistById(id) {
    const { data } = await api.get(`artists/${id}`)
    return data
  }

  // eslint-disable-next-line class-methods-use-this
  async getArtistAlbums(id) {
    const { data } = await api.get(`artists/${id}/albums`)
    return data
  }
}

export default SomosClient
