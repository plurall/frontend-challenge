import { getToken } from '../utils/token'
import axios from 'axios'

interface IArtist {
  external_urls?: {
    spotify: string
  }
  followers: {
    total: number
  }
  genres: Array<string>
  href?: string
  id: string
  images: Array<{ height: number; url: string; width: number }>
  name: string
  popularity: number
  type?: string
  uri?: string
}

class SomosClient {
  constructor() {}

  async getArtists(
    query: string,
    artistsNumber: number,
    artists: Array<IArtist>,
  ) {
    try {
      artistsNumber < 5 ? (artistsNumber = 5) : (artistsNumber = artistsNumber)
      artists = await axios
        .get(
          `https://api.spotify.com/v1/search?type=artist&limit=${artistsNumber}&q=${query}`,
          {
            headers: { Authorization: `Bearer ${getToken()}` },
          },
        )
        .then(res => {
          return res.data.artists.items
        })
      return artists
    } catch (error) {
      return error
    }
  }

  async getAlbumsByArtist(id: string, albums: any) {
    try {
      albums = await axios
        .get(`https://api.spotify.com/v1/artists/${id}/albums?limit=10`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        })
        .then(res => {
          return res.data.items
        })
      return albums
    } catch (error) {
      return error
    }
  }

  async getInfoById(id: string, info: IArtist) {
    try {
      info = await axios
        .get(`https://api.spotify.com/v1/artists/${id}`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        })
        .then(res => {
          return res.data
        })
      return info
    } catch (error) {
      return error
    }
  }
}

export default SomosClient
