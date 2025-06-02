export interface IArtistsImages {
  url: string
  height: number
  width: number
}
export interface IArtist {
  external_urls: {
    spotify: string
  }
  followers: {
    href: null
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: IArtistsImages[]
  name: string
  popularity: number
  type: string
  uri: string
}

export interface IArtistaItem {
  id: string
  name: string
  type: string
  imageUrl?: string
}
