import React, { Component } from "react";
import { connect } from "react-redux";
import {mapStateToProps} from './../store/selector.js';
import {mapDispatchToProps} from './../store/handler.js';

class AddTaskOff extends Component {

  constructor(props){
    super(props);
    this.state = {
      current : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({current : event.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      this.props.addtask(this.state.tasktable,this.state.current);
      // this.setState({tasktable : [...this.state,{id:100, name:'test', finished:false}]});

  }


  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
          <p>Add a new task</p>
          <input type="text" id="tasktitle" value={this.state.current} onChange={this.handleChange} />
          <button type="submit" value="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

const AddTask = connect(mapStateToProps ,mapDispatchToProps)(AddTaskOff);

export default AddTask
