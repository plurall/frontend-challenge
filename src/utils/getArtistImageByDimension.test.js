import { getArtistImageByDimension } from 'utils'

const getTestImages = () => [
  { width: 45, height: 90, url: '0' }, //    ratio: 0.5
  { width: 50, height: 60, url: '1' }, //    ratio: 0.833
  { width: 75, height: 75, url: '2' }, //    ratio: 1
  { width: 100, height: 200, url: '3' }, //  ratio: 0.5
  { width: 160, height: 100, url: '4' }, //  ratio: 1.6
  { width: 100, height: 120, url: '5' }, //  ratio: 0.833
  { width: 360, height: 240, url: '6' }, //  ratio: 1.5
  { width: 500, height: 380, url: '7' }, //  ratio: 1.316
  { width: 800, height: 900, url: '8' }, //  ratio: 0.888
  { width: 2050, height: 984, url: '9' }, // ratio: 2.083
]

describe('getArtistImageByDimension test suite', () => {
  it('should not changed the images array', () => {
    const originalImages = getTestImages()
    const copyImages = originalImages.map(e => e)
    getArtistImageByDimension(copyImages)
    expect(copyImages).toEqual(originalImages)
  })

  it('should prioritize the image closest to a square in the given interval', () => {
    const images = getTestImages()

    expect(getArtistImageByDimension(images)).toBe(images[2])
    expect(getArtistImageByDimension(images, 100)).toBe(images[8])
    expect(getArtistImageByDimension(images, 100, 700)).toBe(images[5])
  })

  it('should reject unqualified images', () => {
    const images = getTestImages()

    expect(getArtistImageByDimension(images, 0, 40)).toBe(undefined)
    expect(getArtistImageByDimension(images, 2_600, 3_000)).toBe(undefined)
    expect(getArtistImageByDimension(images, 1_000, 100)).toBe(undefined)
  })
})
