import { useQuery } from '@tanstack/react-query'
import { SpotifySearchArtistsResponse } from 'types/spotify'
import { spotifyKeys } from './queryKeys'
import { getToken } from 'utils'

async function fetchSearchArtists(
  query: string,
  token: string,
): Promise<SpotifySearchArtistsResponse> {
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(String(query))}&type=artist&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${String(token)}`,
      },
    },
  )
  if (!res.ok) throw new Error('Erro ao buscar artistas')
  return res.json()
}

export function useSearchArtists(query: string): {
  data?: SpotifySearchArtistsResponse
  isLoading: boolean
  error: unknown
} {
  const token = getToken()

  const { data, isLoading, error } = useQuery<SpotifySearchArtistsResponse, unknown>({
    queryKey: spotifyKeys.searchArtists(query),
    queryFn: () => fetchSearchArtists(query, token!),
    enabled: query.length > 4 && !!token,
  })

  return { data, isLoading, error }
}
