import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import LayoutRoute from './components/LayoutRoute'
import HomePage from './pages/Home'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <LayoutRoute path='/' exact component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default AppRouter
