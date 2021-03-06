import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './preloader.css'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'

import { ApolloProvider } from 'react-apollo'
import client from './client'

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root')
)
