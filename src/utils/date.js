import moment from 'moment'

const formatDate = date => moment(new Date(date)).format('DD/MM/YYYY')

export { formatDate }
