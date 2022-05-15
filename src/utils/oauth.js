import ClientOAuth2 from 'client-oauth2'

const getOauthClient = (path) =>
  new ClientOAuth2({
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_CALLBACK_URL,
    scopes: ['user-read-private'],
    accessTokenUri: process.env.REACT_APP_ACCESS_TOKEN_URL,
    authorizationUri: process.env.REACT_APP_AUTHORIZATION_URL,
  })

export { getOauthClient }
