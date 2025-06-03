import { clearToken } from 'utils'

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
    await handleSpotifyError(res)
  }

  return res.json()
}

async function handleSpotifyError(res: Response): Promise<never> {
  let message = 'Erro ao buscar dados do Spotify'

  try {
    const data = await res.json()
    message = data.error?.message || message
  } catch {
    message = `Erro ${res.status}: ${res.statusText}`
  }

  switch (res.status) {
    case 401:
      clearToken()
      window.location.href = '/'
      throw new Error('token expirado ou inválido')

    case 429:
      throw new Error('limite de requisições atingido')

    default:
      throw new Error(message)
  }
}
