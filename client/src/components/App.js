import React from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Test from './pages/Test'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/test' component={Test} />
    </Switch>
  </Router>
)
