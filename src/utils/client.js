import { getToken } from 'utils'

async function getArtists(value, type) {
  const token = getToken()
  let url = ''

  switch (type) {
    case 'search':
      url = `https://api.spotify.com/v1/search?q=${value}&type=artist`
      break

    case 'artist':
      url = `https://api.spotify.com/v1/artists?ids=${value}`
      break

    case 'album':
      url = `https://api.spotify.com/v1/artists/${value}/albums?limit=10`
      break

    default:
      url = 'https://api.spotify.com/v1/me'
      break
  }

  const userResult = await fetch(url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await userResult.json()

  return data

  // const result = await fetch(artist_url, {
  //   method: 'GET',
  //   headers: { Authorization: 'Bearer ' + token },
  // })
  // const data = await result.json()
  // console.log(data)
  // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
  // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
}

export default getArtists
