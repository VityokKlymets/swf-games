import { canUseDOM } from './DOM'

const TOKEN_KEY = 'token'
export const setToken = token => {
  if (!canUseDOM()) return null
  const localStorage = window.localStorage
  localStorage.setItem(TOKEN_KEY, token)
}
export const getToken = () => {
  if (!canUseDOM()) return null
  const localStorage = window.localStorage
  return localStorage.getItem(TOKEN_KEY)
}
export const clearToken = () => {
  if (!canUseDOM()) return null
  const localStorage = window.localStorage
  localStorage.setItem(TOKEN_KEY, '')
}
