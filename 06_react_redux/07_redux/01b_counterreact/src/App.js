import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Counter from './counter';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  addone() {
    this.setState({counter:this.state.counter +1})
  }

  minusone() {
    this.setState({counter:this.state.counter -1})
  }

  reset() {
    this.setState({counter:0})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.minusone()}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={() => this.addone()}>+</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
