'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './css/style.css'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/' children='Home' /></li>
            <li><Link to='/sobre' children='Sobre' /></li>
            <li><Link to='/contato' children='Contato' /></li>
          </ul>
          
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />
        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <h1>Home</h1>
)

const Sobre = () => (
  <h1>Sobre</h1>
)

const Contato = () => (
  <h1>Contato</h1>
)

export default App
