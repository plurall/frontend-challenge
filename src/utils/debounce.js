const debounce = (callback, delay) => {
  let timer
  return (...rest) => {
    const context = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      callback.apply(context, rest)
    }, delay)
  }
}

export { debounce }
