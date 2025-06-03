export interface IArtistExternalUrls {
  spotify: string
}

export interface IArtistFollowers {
  href: string | null
  total: number
}

export interface IArtistImage {
  url: string
  height: number
  width: number
}

export interface IArtistFull {
  external_urls: IArtistExternalUrls
  followers: IArtistFollowers
  genres: string[] // lista de gêneros musicais
  href: string
  id: string
  images: IArtistImage[]
  name: string
  popularity: number // varia de 0 a 100
  type: 'artist'
  uri: string
}
