export interface Image {
  url: string
}

export interface SpotifyArtistDetailsResponse {
  artist: Artist
  albums: Album[]
}

export interface Artist {
  name: string
  popularity: number
  genres: string[]
  images: { url: string }[]
}

export interface Album {
  id: string
  name: string
  release_date: string
  images: { url: string }[]
}
