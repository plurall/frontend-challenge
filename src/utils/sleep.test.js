import { sleep } from 'utils'

const TOLERANCE_MS =
  parseInt(process.env.REACT_APP_TEST_SLEEP_TOLERANCE, 10) || 50

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

    const prevTime3 = Date.now()
    const interval3 = 500
    await sleep(interval3)
    const sleptInterval3 = Date.now() - prevTime3
    expect(Math.abs(interval3 - sleptInterval3)).toBeLessThanOrEqual(
      TOLERANCE_MS,
    )

    const prevTime4 = Date.now()
    const interval4 = Math.round(Math.random() * 1_000)
    await sleep(interval4)
    const sleptInterval4 = Date.now() - prevTime4
    expect(Math.abs(interval4 - sleptInterval4)).toBeLessThanOrEqual(
      TOLERANCE_MS,
    )
  })
})
