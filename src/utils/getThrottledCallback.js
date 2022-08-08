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

    if (timeoutDescriptor) return

    timeoutDescriptor = setTimeout(
      () => handleCallback(lastArgs),
      interval - lastCallInterval,
    )
  }
}

export { getThrottledCallback }
