import { createContext, useState, useEffect } from 'react'
import { getToken, setToken } from '../utils/localstorage'
export const AdminContext = createContext()
export const AdminConsumer = AdminContext.Consumer

export const AdminProvider = props => {
  const [isAdmin, setAdmin] = useState(false)
  useEffect(
    () => {
      const token = getToken()
      setAdmin(!!token)
    },
    [isAdmin]
  )
  const setAdminToken = token => {
    setToken(token)
    setAdmin(!!token)
  }
  return (
    <AdminContext.Provider value={{ isAdmin, setAdminToken }}>
      {props.children}
    </AdminContext.Provider>
  )
}
