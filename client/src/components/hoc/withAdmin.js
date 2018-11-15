import React from 'react'
import { Query } from 'react-apollo'
import { CHECK_IS_ADMIN } from '../../queries'
export default Component => props => {
  return (
    <Query query={CHECK_IS_ADMIN}>
      {({ data: { isAdmin }, loading }) => {
        return <Component {...props} isAdmin={isAdmin} />
      }}
    </Query>
  )
}
