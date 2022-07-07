class APIError extends Error {
  constructor(response, body) {
    super()

    this.name = 'APIError'
    this.response = response
    this.body = body
    this.message = body
      ? `${body.error.status} - ${body.error.message}`
      : response.status
  }
}

export default APIError
