/* eslint-disable no-param-reassign */
import axios from 'axios'
import { getToken } from './token'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

api.interceptors.request.use(config => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }
  return config
})

export default api
