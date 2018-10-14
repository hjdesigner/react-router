'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './css/style.css'

// const Link = (props) => (
//  <NavLink activeStyle={{ color: 'Blue' }} {...props} />
// )

const Link = (props) => (
  <Route path={props.to} exact={props.exact}>
    {({ match, history }) => (
      <a
        href={props.to}
        style={match ? { color: 'red' } : null}
        onClick={(e) => {
          e.preventDefault()
          history.push(props.to)
        }}
      >
        {props.children}
      </a>
    )}
  </Route>
)

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link activeClassName='active-link' to='/' exact children='Home' /></li>
            <li><Link activeStyle={{ color: 'red' }} to='/sobre' children='Sobre' /></li>
            <li><Link to='/contato' children='Contato' /></li>
            <li><Link to='/blog' children='Blog' /></li>
          </ul>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)/:id?' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

const Home = ({ match }) => (
  <div>
    {console.log(match)}
    <h1>Home</h1>
  </div>
)

const Error404 = ({ match }) => (
  <div>
    {console.log('Page404:', match)}
    <h1>Pagina não encontrada</h1>
  </div>
)

const Page = ({ match }) => (
  <div>
    {console.log('Page match:', match)}
    <h1>{match.url}</h1>
  </div>
)

const NumberOfPosts = 3

let blogMatch = null

const Blog = ({ match }) => (
  <div>
    {console.log('Blog match', blogMatch = match)}
    <h1>Blog</h1>
    <ul>
      <li><NavLink to='/blog/post-1'>Post 1</NavLink></li>
      <li><NavLink to='/blog/post-2'>Post 2</NavLink></li>
    </ul>
    <Switch>
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route exact path='/blog' render={(props) => <NoPost NumberOfPosts={NumberOfPosts} {...props} />} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = ({ match }) => (
  <div>
    {console.log('Post 404 match:', match, 'Post 404 match é o mesmo do blog?', match === blogMatch)}
    <h2>Post não encontrado</h2>
  </div>
)

const Post = ({ match }) => (
  <div>
    {console.log('Post match:', match)}
    <h2>Post {match.params.post}</h2>
  </div>
)

const NoPost = ({ NumberOfPosts, match }) => (
  <div>
    <h2>Selecione um dos {NumberOfPosts} posts</h2>
  </div>
)

export default App
