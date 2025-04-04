import ClientOAuth2 from 'client-oauth2'

const getEnvVariable = (key, defaultValue = '') => {
  if (window.ENV && window.ENV[key]) {
    return window.ENV[key]
  }

  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key]
  }

  const fallbackValues = {
    REACT_APP_ACCESS_TOKEN_URL: 'https://accounts.spotify.com/api/token',
    REACT_APP_AUTHORIZATION_URL: 'https://accounts.spotify.com/authorize',
    REACT_APP_CLIENT_ID: '123456',
    REACT_APP_CALLBACK_URL: `${window.location.origin}/callback`,
  }

  return fallbackValues[key] || defaultValue
}

const getOauthClient = () =>
  new ClientOAuth2({
    accessTokenUri: getEnvVariable('REACT_APP_ACCESS_TOKEN_URL'),
    authorizationUri: getEnvVariable('REACT_APP_AUTHORIZATION_URL'),
    clientId: getEnvVariable('REACT_APP_CLIENT_ID'),
    redirectUri: getEnvVariable('REACT_APP_CALLBACK_URL'),
    scopes: [],
  })

export { getOauthClient }
