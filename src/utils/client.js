import { api } from 'services'

export const getArtists = async name => {
  const { data: response } = await api.get(`/search?q=${name}&type=artist`)
  return response
}

export const getArtist = async id => {
  const { data: response } = await api.get(`/artists/${id}`)
  return response
}

export const getArtistAlbums = async id => {
  const { data: response } = await api.get(`/artists/${id}/albums?limit=10`)
  return response
}
