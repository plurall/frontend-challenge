export const spotifyKeys = {
  searchArtists: (query: string) => ['searchArtists', query] as const,
  fetchArtistDetails: (artistId: string) => ['fetchArtistDetails', artistId] as const,
}
