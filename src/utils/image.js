const getImageSrc = images => {
  if (!images.length) return ''

  return images.pop().url
}

export { getImageSrc }
