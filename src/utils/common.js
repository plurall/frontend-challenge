
export const convertDate = date => {
  return date.split('-')
    .reverse()
    .join('/')
}
