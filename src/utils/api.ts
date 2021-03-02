import axios from 'axios'
import { getToken } from './token'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
  }
})

console.log(getToken())

export default api
