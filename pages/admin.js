import React from 'react'
import AdminPanel from './components/panels/AdminPanel'
import AdminForm from './components/forms/AdminForm'
import withAdmin from './components/hoc/withAdmin'
import withData from './lib/withData'
const Admin = ({ isAdmin }) => {
  return isAdmin ? <AdminPanel /> : <AdminForm />
}

export default withData(withAdmin(Admin))
