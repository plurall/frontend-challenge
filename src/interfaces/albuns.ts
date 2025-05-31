export interface IAlbumImage {
  url: string
  height: number
  width: number
}

export interface IAlbumExternalUrls {
  spotify: string
}

export interface IAlbumArtist {
  external_urls: IAlbumExternalUrls
  href: string
  id: string
  name: string
  type: 'artist'
  uri: string
}

export interface IAlbumAlbum {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: IAlbumExternalUrls
  href: string
  id: string
  images: IAlbumImage[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  type: 'album'
  uri: string
  artists: IAlbumArtist[]
  album_group: string
}
