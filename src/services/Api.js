import axios from 'axios'

import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get('authenticated_token')}`,
  },
})

export default api
