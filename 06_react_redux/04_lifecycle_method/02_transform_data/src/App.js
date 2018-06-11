import React, { Component } from 'react';
import './App.css';
import expenses from './expenses';
import users from './users';

function Showtable(props) {
  return (
    <table>
      {props.tabdata.map(value => Addrow(value))}
    </table>
  )
}

function FindUser(user) {
  return (
    <td>
      {users['user']}
    </td>
  )
}

function Addrow(props) {

  // <FindUser data={props.who}/>
  return (
    <tr>
      {FindUser(props.who)}
      <td>{props.what}</td>
      <td>{props.price}</td>
    </tr>
  )
}



// App has `expenses` and `users` as props
class App extends Component {
  render() {
    return (
      <div className="App">
        <Showtable tabdata={expenses}/>
      </div>
    );
  }
}

export default App;
