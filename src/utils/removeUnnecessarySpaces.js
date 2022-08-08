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
