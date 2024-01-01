export const required = (value) => {

  if (value) {
    return undefined
  }
  return 'Field is required'

}


export const maxLength = (maxLen) => {
  return (
    (value) => {
      if (value.length > 30) {
        return `Max length is ${maxLen} symbols`
      }
      return undefined
    }
  )
}

