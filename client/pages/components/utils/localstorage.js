import { canUseDOM } from './DOM'

const TOKEN_KEY = 'token'
export const setToken = token => {
  if (!canUseDOM()) return
  const localStorage = window.localStorage
  localStorage.setItem(TOKEN_KEY, token)
}
export const getToken = () => {
  if (!canUseDOM()) return
  const localStorage = window.localStorage
  localStorage.getItem(TOKEN_KEY)
}
export const clearToken = () => {
  if (!canUseDOM()) return
  const localStorage = window.localStorage
  localStorage.setItem(TOKEN_KEY, '')
}
