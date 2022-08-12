const domain = () => {
  const {
    location: { hostname },
  } = window
  return hostname
}

/**
 * Get client token stored in the cookies
 * @returns the token
 */

const getToken = () => {
  const r = document.cookie.match('\\bauthenticated_token=([^;]*)\\b')
  return r ? r[1] : undefined
}

/**
 * Save the client token into the cookies
 * @param {*} token the given client token
 */

const setToken = token => {
  document.cookie = `authenticated_token=${token ||
    ''};path=/;domain=${domain()}`
}

/**
 * Remove the client token from the cookies
 */

const clearToken = () => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain()}`
  }
}

export { getToken, setToken, clearToken }
