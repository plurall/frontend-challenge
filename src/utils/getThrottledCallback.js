/**
 * Adds throttle mechanism to a given function.
 * Any subsequent function invocations that fall into the
 * given interval will be throttled (delayed) and called
 * once the given interval had been accomplished.
 *
 * @param {*} callback the given function to be throttled
 * @param {*} interval the mininum interval (in milliseconds) between subsequent
 *                      callback invocations. Defaults to 500 ms.
 * @returns the wrapper function with the callback mechanism
 */

const getThrottledCallback = (callback, interval = 500) => {
  let isFirstCall = true
  let timeoutDescriptor = 0
  let lastCallTime = 0
  let lastArgs = []

  const afterCallCleanup = () => {
    isFirstCall = false
    timeoutDescriptor = 0
    lastCallTime = Date.now()
  }

  const handleCallback = args => {
    callback(...args)
    afterCallCleanup()
  }

  return (...args) => {
    lastArgs = args

    const lastCallInterval = Date.now() - lastCallTime
    const isTimedOut = lastCallInterval >= interval

    if (isFirstCall || isTimedOut) {
      handleCallback(lastArgs)
      return
    }

    if (!timeoutDescriptor) {
      timeoutDescriptor = setTimeout(
        () => handleCallback(lastArgs),
        interval - lastCallInterval,
      )
    }
  }
}

export { getThrottledCallback }
