import * as dayjs from 'dayjs'

const formatDate = (date, format) => {
  return dayjs(date).format(format)
}

export { formatDate }
