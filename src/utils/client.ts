import api from './api'
import { AlbumList, Artist, ArtistList } from './types'
import { clearToken } from './token'

const onError = (error: any) => {
  const errorMessage = error.response.data.error.message
  if (errorMessage === 'The access token expired' || errorMessage === 'Invalid access token') {
    clearToken()
    window.location.href = '/'
  }
}

export const getArtists = async (query: string): Promise<ArtistList> => {
  try {
    const response = await api().get(`search?q=${query}&type=artist`)
    return response.data.artists
  } catch (error) {
    throw onError(error)
  }
}

export const getArtist = async (id: string): Promise<{artist: Artist, albums: AlbumList} | null> => {
  try {
    const artistResponse = await api().get(`artists/${id}`)
    const artist: Artist = artistResponse.data
    const albumsResponse = await api().get(`artists/${id}/albums`)
    const albums: AlbumList = albumsResponse.data
    return { artist, albums }
  } catch (error) {
    onError(error)
    return null
  }
}
