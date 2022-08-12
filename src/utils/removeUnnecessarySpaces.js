/**
 * Removes initial, ending and duplicate spaces.
 *
 * Time complexity: O(n)
 *
 * Space complexity: O(n)
 *
 * @param {*} string the string to be formatted
 * @param {*} allowEndingSpace allow an ending space when present
 * @returns the formatted string
 */

const removeUnnecessarySpaces = (string, allowEndingSpace = false) => {
  const singleSpaceString = string
    .split(' ')
    .filter(e => e)
    .join(' ')

  return allowEndingSpace && singleSpaceString.length && string.endsWith(' ')
    ? `${singleSpaceString} `
    : singleSpaceString
}

export { removeUnnecessarySpaces }
