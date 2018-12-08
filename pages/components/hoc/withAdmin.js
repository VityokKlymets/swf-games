import React from 'react'
import { AdminConsumer } from '../context/AdminContext'
const withAdmin = Component => props => {
  return (
    <AdminConsumer>
      {({ isAdmin }) => <Component {...props} isAdmin={isAdmin} />}
    </AdminConsumer>
  )
}

export default withAdmin
