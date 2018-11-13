import React from 'react'
import AdminPanel from '../panels/AdminPanel'
import AdminForm from '../forms/AdminForm'
import { CHECK_IS_ADMIN } from '../../queries'
import { compose, graphql } from 'react-apollo'
const Admin = ({ isAdmin }) => {
  return (
    <div>
      {isAdmin ? <AdminPanel /> : <AdminForm />}
    </div>
  )
}

export default compose(
  graphql(CHECK_IS_ADMIN, {
    props: ({ data: { isAdmin } }) => ({
      isAdmin
    })
  })
)(Admin)
