export function formatTime(dateString) {
  if (!dateString) return ''

  const date = new Date(dateString)
  return date.toTimeString().slice(0, 5)
}
