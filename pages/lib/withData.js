import { withData } from 'next-apollo'
import client from '../apolloClient'

export default withData(client)
