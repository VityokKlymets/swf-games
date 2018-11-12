import React from 'react'
import AdminPanel from '../panels/AdminPanel'
import AdminForm from '../forms/AdminForm'
export default ({ isAdmin }) => {
  return (
    <div>
      {isAdmin ? <AdminPanel /> : <AdminForm />}
    </div>
  )
}
