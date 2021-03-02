import api from './api'

const onError = (error: any) => {
  console.log(error)
}

export const getArtists = async () => {
  try {
    const artists = await api.get('artists/?ids=0oSGxfWSnnOXhD2fKuz2Gy%2C3dBVyJ7JuOMt4GE9607Qin')
    console.log(artists)
  } catch (error) {
    onError(error)
  }

  // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
  // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
}
