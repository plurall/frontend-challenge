/**
 * Remove duplicate items in the given array.
 *
 * Time complexity:  O(n)
 *
 * Space complexity: O(n)
 *
 * @param {*} array the list of items
 * @param {*} keyExtractor a function that returns the element
 *                         key (identifier that will be used to
 *                         determine wether or not an element is
 *                         unique)
 * @returns a brand new array of all unique items
 */

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
