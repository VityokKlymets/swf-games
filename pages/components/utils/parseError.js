export default error => {
  let result = []

  if (error.networkError) {
    result = error.networkError.result.errors.map(m => m.message)
  } else {
    const messages = error.message.split(/:|,/g)
    result = messages.slice(2)
  }
  return result
}
