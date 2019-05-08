const filterElement = (arr, query) =>
  arr.filter(
    element => element.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
  )
export { filterElement }
