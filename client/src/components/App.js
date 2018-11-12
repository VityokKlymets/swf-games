import React from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
    </Switch>
  </Router>
)
