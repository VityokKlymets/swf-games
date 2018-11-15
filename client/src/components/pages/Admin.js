import React from 'react'
import AdminPanel from '../panels/AdminPanel'
import AdminForm from '../forms/AdminForm'
import withAdmin from '../hoc/withAdmin'
const Admin = ({ isAdmin }) => {
  return (
    <div>
      {isAdmin ? <AdminPanel /> : <AdminForm />}
    </div>
  )
}

export default withAdmin(Admin)
