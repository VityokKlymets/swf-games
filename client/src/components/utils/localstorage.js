const localStorage = window.localStorage
const TOKEN_KEY = 'token'
export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token)
}
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const clearToken = () => localStorage.setItem(TOKEN_KEY, '')
