const BASE_URL = 'https://api.spotify.com/v1'

// Caso queira usar axios
// export async function spotifyClient(path: string, token: string) {
//   const response = await axios.get(`https://api.spotify.com/v1${path}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   })
//   return response.data
// }

export async function spotifyClient(path: string, token: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error('Erro ao buscar dados do Spotify')
  }

  return res.json()
}
