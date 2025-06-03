import { spotifyClient } from '../services/spotifyClient'
import { SpotifySearchArtistsResponse } from 'types/spotify'

export async function fetchSearchArtists(
  query: string,
  token: string,
): Promise<SpotifySearchArtistsResponse> {
  const encodedQuery = encodeURIComponent(query)
  return spotifyClient(`/search?q=${encodedQuery}&type=artist&limit=10`, token)
}
