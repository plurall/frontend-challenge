import { useQuery } from '@tanstack/react-query'
import { SpotifySearchArtistsResponse } from 'types/spotify'
import { spotifyKeys } from '../queryKeys'
import { getToken } from 'utils'
import { fetchSearchArtists } from '../fetchers/fetchSearchArtists'

export function useSearchArtists(query: string): {
  data?: SpotifySearchArtistsResponse
  isLoading: boolean
  error: string | null
} {
  const token = getToken()

  const { data, isLoading, error } = useQuery<SpotifySearchArtistsResponse, string>({
    queryKey: spotifyKeys.searchArtists(query),
    queryFn: () => fetchSearchArtists(query, token!),
    enabled: query.length > 4 && !!token,
  })

  return { data, isLoading, error }
}
