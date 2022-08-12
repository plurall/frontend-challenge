/**
 * Transform the input date into a string in the dd/mm/yyyy format
 * @param {*} date an number (unix timestamp), a string (ISO format)
 *                 or a Date object
 * @param {*} timeZone the timezone string. For all supported timezones
 *                     run the following code `Intl.supportedValuesOf('timeZone')`
 * @returns date string in the brazilian format (dd/mm/yyyy)
 */

const formatDate = (date, timeZone = 'Europe/London') => {
  if (!date && typeof date !== 'number') return ''

  const dateString = new Date(date).toLocaleDateString('pt-BR', { timeZone })

  return dateString === 'Invalid Date' ? '' : dateString
}

export { formatDate }
