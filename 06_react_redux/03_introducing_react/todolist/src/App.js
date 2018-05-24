import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const tasks = [
  { id: 'task1', desc:'first task'},
  { id: 'task2', desc:'second task'},
  { id: 'task3', desc:'third task'},
];
// const tasks = 'test2';

class Showtasks extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { datatabsort: "decathlon_id", order: "ASC" }
  // }
  render() {
    return (
      <table>
      {this.props.tasklist.map(value => <Showonetask task={value}/>)}
      </table>
    )
  }
}

class Showonetask extends Component {
 render() {
   return(
     <tr><td>{this.props.task.id}</td><td>{this.props.task.desc}</td></tr>
   )
 }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { tasklist:  tasks }
  }

  addtask() {
    this.setState( { tasklist : { id: 'task4', desc:'new task'}});
  }
  render() {
    return (
      <div className="App">
        <p>
          <Showtasks tasklist={this.state.tasklist}/>
          <button onClick={this.addtask}>Add</button>
        </p>
      </div>
    );
  }
}

export default App;
