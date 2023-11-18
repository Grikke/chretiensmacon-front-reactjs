export const formatName = (string: string) => {
  return string
    .split(' ')
    .map((word, index) => 
      `${word[0].toUpperCase()}${(index === 0) ? word.slice(1) : word.slice(1).toUpperCase()}`
    )
    .join(' ')
}

export const formatPhone = (phone: string) => {
  return "+33"+ phone.replaceAll(' ', '').slice(1, 11)
}