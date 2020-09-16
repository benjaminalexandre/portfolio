export const stringCapitalize = str => {
  if (str === null || str === '') return false
  str.toString()

  return str.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())
}

export const mergeStrings = strings =>
  strings[0].charAt(0).toUpperCase() +
  strings[0].substr(1).toLowerCase() +
  strings
    .slice(1)
    .map(string => `, ${string.toLowerCase()}`)
    .join('')
