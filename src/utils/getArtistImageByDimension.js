const getRatio = image => image.width / image.height

const isImageInBounds = (image, lowerBound, upperBound) => {
  const minSide = Math.min(image.width, image.height)
  const maxSide = Math.min(image.width, image.height)

  return minSide >= lowerBound && maxSide <= upperBound
}

/**
 * Gets the most square image (width / height ratio close to 1) the fall into the given
 * mininum and maximum interval (in pixels)
 *
 * @param {*} images the array of images in the format:
 *                   `{ width: number, height: number, ... }`
 * @param {*} min number representing the minimum dimension
 *                (width or height) in pixels
 * @param {*} max number representing the maximum dimension
 *                (width or height) in pixels
 * @returns
 */

const getArtistImageByDimension = (images, min = 0, max = 3000) => {
  const sortedByClosestToSquare = images
    .map(e => e)
    .sort((a, b) => Math.abs(1 - getRatio(a)) - Math.abs(1 - getRatio(b)))

  return sortedByClosestToSquare.find(image => isImageInBounds(image, min, max))
}

export { getArtistImageByDimension }
