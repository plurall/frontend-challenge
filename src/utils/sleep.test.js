import { sleep } from 'utils'

const TOLERANCE_MS = 5

describe('sleep test suite', () => {
  it('should resolve the promise in the specified interval', async () => {
    const prevTime1 = Date.now()
    const interval1 = 0
    await sleep(interval1)
    const sleptInterval1 = Date.now() - prevTime1
    expect(Math.abs(interval1 - sleptInterval1)).toBeLessThanOrEqual(
      TOLERANCE_MS,
    )

    const prevTime2 = Date.now()
    const interval2 = 100
    await sleep(interval2)
    const sleptInterval2 = Date.now() - prevTime2
    expect(Math.abs(interval2 - sleptInterval2)).toBeLessThanOrEqual(
      TOLERANCE_MS,
    )

    const prevTime = Date.now()
    const interval3 = Math.round(Math.random() * 1_000)
    await sleep(interval3)
    const sleptInterval3 = Date.now() - prevTime
    expect(Math.abs(interval3 - sleptInterval3)).toBeLessThanOrEqual(
      TOLERANCE_MS,
    )
  })
})
