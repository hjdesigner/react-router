'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

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
            <li><Link to='/blog' children='Blog' /></li>
          </ul>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <h1>Home</h1>
)

const Error404 = () => (
  <h1>Pagina não encontrada</h1>
)

const Page = ({ match }) => (
  <h1>{match.url}</h1>
)

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
    </ul>
    <Switch>
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route exact path='/blog' component={NoPost} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = () => (
  <div>
    <h2>Post não encontrado</h2>
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
