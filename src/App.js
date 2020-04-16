import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Home } from './pages'
import { apiEndpoint } from './prismic-configuration'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/blog/' to='/' />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
