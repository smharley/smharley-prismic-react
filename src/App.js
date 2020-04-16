import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Home } from './pages'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/blog/' to='/' />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
