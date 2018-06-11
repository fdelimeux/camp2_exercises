import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <h1>About</h1>
    )
  }
}

// class User extends Component {
//   render() {
//     return (
//       <h1>{this.props.match.params.user}</h1>
//     )
//   }
// }

// function User({match}) {
//   return (
//     <h1>{match.params.user}</h1>
//   )
// }

const User = ({match}) => (<h1>{match.params.user}</h1>)

class NoMatch extends Component {
  render() {
    return (
      <h1>No match...</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/:user" component={User}/>
        <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
