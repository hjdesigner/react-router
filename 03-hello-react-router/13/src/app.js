'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './css/style.css'

const Link = (props) => (
  <Route>
    {({ match, location, history }) => (
      <a href={props.to} onClick={(e) => {
        e.preventDefault()
        history.replace(props.to)
      }}>{props.children}</a>
    )}
  </Route>
  // <NavLink activeStyle={{ color: 'Blue' }} {...props} />
)

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to={{ pathname: '/', state: { link: 'home' } }}>Home</Link></li>
            <li><Link activeStyle={{ color: 'red' }} to='/sobre' children='Sobre' /></li>
            <li><Link to='/contato' children='Contato' /></li>
            <li><Link to='/blog' children='Blog' /></li>
            <li><a href='#informacoes-do-site'>Informacões do site</a></li>
          </ul>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)/:id?' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>
          <div id='informacoes-do-site' style={{ marginTop: '1000px' }}>
            <h2>Informações do site</h2>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Home = ({ match, location, history }) => (
  <div>
    {console.log(location)}
    {console.log(
      'location search',
      location.search
        .replace('?', '')
        .split('&')
        .reduce((acc, item) => {
          const [key, value] = item.split('=')
          acc[key] = value
          return acc
        }, {})
    )}
    {console.log('Home history:', history)}
    <h1>Home</h1>
  </div>
)

const Error404 = ({ match, location }) => (
  <div>
    {console.log('Page404:', location)}
    <h1>Pagina não encontrada</h1>
  </div>
)

const Page = ({ match, location, history }) => (
  <div>
    {console.log('Page location:', location)}
    {console.log('Page history:', history)}
    <h1>{match.url}</h1>
  </div>
)

const NumberOfPosts = 3

const Blog = ({ match, location }) => (
  <div>
    {console.log('Blog location', location)}
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

const Post404 = ({ match, location }) => (
  <div>
    {console.log('Post 404 location:', match, location)}
    <h2>Post não encontrado</h2>
  </div>
)

const Post = ({ match, location }) => (
  <div>
    {console.log('Post location:', location)}
    <h2>Post {match.params.post}</h2>
  </div>
)

const NoPost = ({ NumberOfPosts, match }) => (
  <div>
    <h2>Selecione um dos {NumberOfPosts} posts</h2>
  </div>
)

export default App
