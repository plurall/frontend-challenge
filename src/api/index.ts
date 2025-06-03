import axios from 'axios'
import { getToken } from '../utils/token'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
})

// Interceptor para adicionar token JWT
api.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
