const getRatio = image => image.width / image.height

const isImageInBounds = (image, lowerBound, upperBound) => {
  const minSide = Math.min(image.width, image.height)
  const maxSide = Math.min(image.width, image.height)

  return minSide >= lowerBound && maxSide <= upperBound
}

const getArtistImageByDimension = (images, min = 0, max = 3000) => {
  const sortedByClosestToSquare = images
    .map(e => e)
    .sort((a, b) => Math.abs(1 - getRatio(a)) - Math.abs(1 - getRatio(b)))

  return sortedByClosestToSquare.find(image => isImageInBounds(image, min, max))
}

export { getArtistImageByDimension }
