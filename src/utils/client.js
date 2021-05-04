import { clearToken, getToken } from 'utils'
import axios from './axios-instance'

class SomosClient {
  async getArtists(name, offset=0) {
    try {
      const result = await axios({
        method: 'GET',
        url: `/search?q=name:${name}&type=artist&offset=${offset}`,
      })
      return result.data;
    } catch (error) {
      console.log(error)
    }
  }

  async getArtist(id) {
    try {
      const result = await axios({
        method: 'GET',
        url: `/artists/${id}`,
      })
      return result.data;
    } catch (error) {
      console.log(error)
    }
  }
}

export default SomosClient
