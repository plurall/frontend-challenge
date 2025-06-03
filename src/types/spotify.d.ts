export interface SpotifyImage {
  url: string
  height?: number
  width?: number
}

export interface SpotifyArtist {
  id: string
  name: string
  images: SpotifyImage[]
  popularity?: number
  genres?: string[]
  [key: string]: any
}

export interface SpotifySearchArtistsResponse {
  artists: {
    items: SpotifyArtist[]
    total: number
    limit: number
    offset: number
    href: string
    next?: string
    previous?: string
  }
}
