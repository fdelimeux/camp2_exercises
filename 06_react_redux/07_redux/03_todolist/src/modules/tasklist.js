import React, { Component } from 'react';
import { connect } from "react-redux";
import Task from './task';
import {mapStateToProps} from './../store/selector.js';
import {mapDispatchToProps} from './../store/handler.js';

class Tasklist extends Component {
  render() {
    return (
      <div>

            {this.props.tasktable.map((taskinf) =>
              <TaskConnected id={taskinf.id} title={taskinf.title} finished={taskinf.finished} />

          )}
      </div>
    )
  }
}

const TaskConnected = connect(mapStateToProps ,mapDispatchToProps)(Task);

export default Tasklist
