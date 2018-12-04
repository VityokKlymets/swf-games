import React from 'react'
import { Query } from 'react-apollo'
import { CHECK_IS_ADMIN } from '../../queries'
const withAdmin = Component => props => {
  return (
    <Query query={CHECK_IS_ADMIN}>
      {({ data: { isAdmin } }) => {
        return <Component {...props} isAdmin={isAdmin} />
      }}
    </Query>
  )
}

export default withAdmin
