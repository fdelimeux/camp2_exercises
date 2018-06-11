import React, {Component} from 'react';
import { connect } from "react-redux";
import './App.css';
//import Store from './store';

function Counter (props) {
      return (
        <div>
          <button onClick={props.less}>-</button>
          <p>{props.counter}</p>
          <button onClick={props.more}>+</button>
          <button onClick={props.reset}>reset</button>
        </div>
      )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedApp />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    less : () => dispatch({type : "LESS"}),
    more : () => dispatch({type : "MORE"}),
    reset : () => dispatch({type : "RESET"})
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter }
}

const ConnectedApp = connect(null ,mapDispatchToProps)(Counter);

export default App;
