const filterElement = (arr, query) =>
  arr.filter(
    element => element.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
  )

const filterNameToValue = data =>
  data.map((x, i) => ({
    id: i,
    value: x.name,
  }))
export { filterElement, filterNameToValue }
