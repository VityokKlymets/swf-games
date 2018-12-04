export const split = pathname => {
  let result = pathname.split('/').filter(val => val !== '')
  return result
}
