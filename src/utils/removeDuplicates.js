const removeDuplicates = (array, keyExtractor = e => e) => {
  const visitedElements = new Set()

  return array.filter(e => {
    const key = keyExtractor(e)
    if (visitedElements.has(key)) return false

    visitedElements.add(key)
    return true
  })
}

export { removeDuplicates }
