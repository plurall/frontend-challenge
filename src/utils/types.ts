interface Photo {
  height: number
  url: string
  width: number
}

export interface Artist {
  id: string
  name: string
  images: Photo[]
  genres: string[]
  popularity: number
}

export interface ArtistList {
  href: string
  items: Artist[]
  length: number
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export interface Album {
  album_group: string
  album_type: string
  artists: Artist[]
  available_markets: string[]
  id: string
  images: Photo[]
  name: string
  release_date: string
}

export interface AlbumList {
  href: string
  items: Album[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}
