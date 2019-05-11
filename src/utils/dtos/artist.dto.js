import { getImageSrc } from 'utils'

const fromApi = (artist = {}) => ({
  image: artist.images && artist.images.length && artist.images[0].url,
  name: artist.name,
  genres: artist.genres,
  popularity: artist.popularity,
})

export { fromApi }
