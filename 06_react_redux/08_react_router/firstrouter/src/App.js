import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'


// const Home = () => (
//   <div>
//     <h2>This is the Home</h2>
//   </div>
// )

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is the Home</h2>
      </div>
    )
  }}

// const About = () => (
//   <div>
//     <h2>This is About section</h2>
//   </div>
// )

function About() {
  return (
    <div>
      <h2>This is About section</h2>
    </div>
  )
}


const Article = ({ match }) => (
  <div>
    <h2>This is the article section</h2>
    <Route path={`${match.url}/:ArticleId`} component={ReadArticle}/>
  </div>


)

const ReadArticle = ({ match }) => (
  <div>
    {match.params.ArticleId}
  </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/article" className="link">Article</Link></li>
            <li><NavLink to="/article/42" activeClassName="activenavlink">Article 42</NavLink></li>
            <li><NavLink to="/article/1337" activeClassName="activenavlink">Article 1337</NavLink></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/article" component={Article}/>
        </div>
      </Router>
    );
  }
}

export default App;
