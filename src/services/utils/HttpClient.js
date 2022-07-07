import { clearToken, getToken } from 'utils'

class HttpClient {
  constructor(baseURL) {
    this.accessToken = getToken()
    this.baseURL = baseURL
  }

  async makeRequest(path, options) {
    const defaultHeaders = {
      Authorization: `Bearer ${this.accessToken}`,
    }

    const headers = new Headers(defaultHeaders)

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value)
      })
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      headers,
    })

    const contentType = response.headers.get('Content-Type')

    let responseBody = null

    if (contentType.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      return responseBody
    }

    if (response.status === 401) {
      clearToken()
    }

    throw new Error(response, responseBody)
  }

  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    })
  }
}

export default HttpClient
