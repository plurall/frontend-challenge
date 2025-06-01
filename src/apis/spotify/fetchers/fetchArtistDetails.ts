import { SpotifyArtistDetailsResponse } from 'types/artist'
import { spotifyClient } from '../services/spotifyClient'

export async function fetchArtistDetails(
  artistId: string,
  token: string,
): Promise<SpotifyArtistDetailsResponse> {
  const [artist, albumsResponse] = await Promise.all([
    spotifyClient(`/artists/${artistId}`, token),
    spotifyClient(`/artists/${artistId}/albums?limit=10&include_groups=album`, token),
  ])

  return {
    artist,
    albums: albumsResponse.items,
  }
}
