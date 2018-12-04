export const readAsBinaryFile = file =>
  new Promise(resolve => {
    const reader = new window.FileReader()
    reader.onload = () => {
      const name = file.name
      const extension = name.substring(name.lastIndexOf('.') + 1)
      resolve({
        extension,
        result: reader.result
      })
    }
    reader.readAsBinaryString(file)
  })
export const readAsDataURL = file =>
  new Promise(resolve => {
    const reader = new window.FileReader()
    reader.onload = () => {
      resolve({ ...parseDataResult(reader.result), original: reader.result })
    }
    reader.readAsDataURL(file)
  })
const parseDataResult = result => {
  const extension = result.substring(
    result.indexOf('/') + 1,
    result.indexOf(';')
  )
  const data = result.substring(result.indexOf(',') + 1)
  return {
    extension,
    result: data
  }
}
