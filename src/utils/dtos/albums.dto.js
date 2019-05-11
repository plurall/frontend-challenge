import { getImageSrc } from 'utils'

const fromApi = (albums = {}) => {
  if (!albums.items.length) return []

  return albums.items.map(album => ({
    id: album.id,
    image: getImageSrc(album.images),
    name: album.name,
    date: new Date(album.release_date)
      .toISOString()
      .substr(0, 10)
      .split('-')
      .reverse()
      .join('/'),
  }))
}

export { fromApi }
