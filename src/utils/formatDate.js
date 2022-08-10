const formatDate = (date, timeZone = 'Europe/London') => {
  if (!date && typeof date !== 'number') return ''

  const dateString = new Date(date).toLocaleDateString('pt-BR', { timeZone })

  return dateString === 'Invalid Date' ? '' : dateString
}

export { formatDate }
