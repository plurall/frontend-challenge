// hooks/useArtistDetails.ts
import { useQuery } from '@tanstack/react-query'
import { getToken } from 'utils'
import { spotifyKeys } from '../queryKeys'
import { fetchArtistDetails } from '../fetchers/fetchArtistDetails'
import { SpotifyArtistDetailsResponse } from 'types/artist'

export function useArtistDetails(artistId: string): {
  data?: SpotifyArtistDetailsResponse
  isLoading: boolean
  error: string | null
} {
  const token = getToken()

  const { data, isLoading, error } = useQuery<SpotifyArtistDetailsResponse, string>({
    queryKey: spotifyKeys.fetchArtistDetails(artistId),
    queryFn: () => fetchArtistDetails(artistId, token!),
    enabled: !!artistId && !!token,
  })

  return { data, isLoading, error }
}
