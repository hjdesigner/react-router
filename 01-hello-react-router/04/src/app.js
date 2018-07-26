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
            <li><Link to='/blog' children='Blog' /></li>
          </ul>
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/blog' component={Blog} />
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

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
    </ul>
    <Route path='/blog/:post' component={Post} />
    <Route exact path='/blog' component={NoPost} />
  </div>
)

const Post = ({ match }) => (
  <div>
    <h2>Post {match.params.post}</h2>
  </div>
)

const NoPost = () => (
  <div>
    <h2>Selecione um post</h2>
  </div>
)

export default App
