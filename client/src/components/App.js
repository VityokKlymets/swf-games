import React from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Test from './pages/Test'
import Game from './pages/Game'
import Category from './pages/Category'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/test' component={Test} />
      <Route path='/game' component={Game} />
      <Route path='/category' component={Category} />
    </Switch>
  </Router>
)
