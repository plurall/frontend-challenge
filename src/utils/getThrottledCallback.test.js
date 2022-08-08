import { getThrottledCallback, sleep } from 'utils'

describe('getThrottledCallback test suite', () => {
  it('should run immediately on the first call', async () => {
    let called = false

    const cb = getThrottledCallback(() => {
      called = true
    }, 10)

    expect(called).toBeFalsy()
    cb()
    expect(called).toBeTruthy()
  })

  it('should throttle the requests in the second call and after', async () => {
    let count = 0

    const cb = getThrottledCallback(() => {
      count += 1
    }, 100)

    expect(count).toBe(0)

    cb()
    expect(count).toBe(1)

    for (let i = 0; i < 10; i += 1) {
      cb()
    }
    expect(count).toBe(1)

    await sleep(110)
    expect(count).toBe(2)

    await sleep(110)
    expect(count).toBe(2)

    cb()
    expect(count).toBe(3)

    cb()
    expect(count).toBe(3)
  })
})
