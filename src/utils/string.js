export const getOffsetFromURL = str => {
  const key = '&offset='
  const key2 = '&limit='
  const index = str.search(key)
  const index2 = str.search(key2)
  
  return parseInt(str.substring(index + key.length, index2), 10);
}
