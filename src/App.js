import React from 'react'
import HomeScreen from './components/HomeScreen'
import HeaderNav from './components/HeaderNav'
import {BrowserRouter, Switch, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <HeaderNav/>
      <HomeScreen/>
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={HomeScreen} />
        </switch>
      </BrowserRouter>
    </div>
  )
}

export default App
