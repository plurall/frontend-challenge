import { getImageSrc } from 'utils'

const fromApi = (result = {}) => {
  if (!result.artists.items.length) return []

  return result.artists.items.map(artist => ({
    image: getImageSrc(artist.images),
    name: artist.name,
    id: artist.id,
  }))
}

export { fromApi }
