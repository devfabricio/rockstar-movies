import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SingleMovie from '../pages/SingleMovie'

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route path={'/'} exact isPrivate={true} component={Home} />
        <Route path={'/:id'} exact isPrivate={true} component={SingleMovie} />
      </Switch>
  )
}

export default Routes
