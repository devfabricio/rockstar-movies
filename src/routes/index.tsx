import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route path={'/'} exact isPrivate={true} component={Home} />
      </Switch>
  )
}

export default Routes
