export const formatName = (string: string) => {
  return string
    .split(' ')
    .map((word, index) => 
      `${word[0].toUpperCase()}${(index === 0) ? word.slice(1) : word.slice(1).toUpperCase()}`
    )
    .join(' ')
}

export const formatPhone = (phone: string) => {
  return phone
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2')
}