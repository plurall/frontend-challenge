export function formatDate(date: string): string {
  const parsed = new Date(date)
  const day = String(parsed.getDate()).padStart(2, '0')
  const month = String(parsed.getMonth() + 1).padStart(2, '0')
  const year = parsed.getFullYear()

  return `${day}/${month}/${year}`
}
