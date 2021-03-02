import axios from 'axios'
import { getToken } from './token'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: { Authorization: `Basic ${getToken()}` },
})

export default api
