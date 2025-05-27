const domain = (): string => {
  const {
    location: { hostname },
  } = window
  return hostname
}

const getToken = (): string | undefined => {
  const r = document.cookie.match('\\bauthenticated_token=([^;]*)\\b')
  return r ? r[1] : undefined
}

const setToken = (token: string | undefined): void => {
  document.cookie = `authenticated_token=${token || ''};path=/;domain=${domain()}`
}

const clearToken = (): void => {
  const cookies: string[] = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie: string = cookies[i]
    const eqPos: number = cookie.indexOf('=')
    const name: string = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain()}`
  }
}

export { getToken, setToken, clearToken }
