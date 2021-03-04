import axios, { AxiosInstance } from 'axios'
import { getToken } from './token'

const api = (): AxiosInstance => {
  const token = getToken()
  return axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}

export default api
