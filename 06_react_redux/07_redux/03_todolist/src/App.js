import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Task from './modules/task'
import Tasklist from './modules/tasklist'
import {mapStateToProps} from './store/selector.js';
import {mapDispatchToProps} from './store/handler.js';
import AddTask from './modules/addtask'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTask />
        <TasklistConnected />
      </div>
    );
  }
}

const TasklistConnected = connect(mapStateToProps ,mapDispatchToProps)(Tasklist);

export default App;
