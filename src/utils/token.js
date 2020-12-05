const domain = () => {
  const {
    location: { hostname },
  } = window
  return hostname
}

const getToken = () => {
  const r = document.cookie.match('\\bauthenticated_token=([^;]*)\\b')
  return r ? r[1] : undefined
}

// Add this constant token to become easier to use the api calls in client.js

export const token = getToken();

const setToken = token => {
  document.cookie = `authenticated_token=${token ||
    ''};path=/;domain=${domain()}`
}

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
