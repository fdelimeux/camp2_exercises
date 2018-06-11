import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
//import Counter from './counter';

class Counter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.minusone()}>-</button>
        <span>{this.props.counter}</span>
        <button onClick={() => this.props.addone()}>+</button>
        <button onClick={() => this.props.reset()}>Reset</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <CounterConnected />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addone : () => dispatch({type : "ADDONE"}),
    minusone : () => dispatch({type : "MINUSONE"}),
    reset : () => dispatch({type : "RESET"})
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter }
}

const CounterConnected = connect(mapStateToProps ,mapDispatchToProps)(Counter);


export default App;
