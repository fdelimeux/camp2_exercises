import React, { Component } from 'react';

class Task extends Component {

  taskstyle(value){
    if (value) {
      return "blue"
    }
  }

  render() {
    return (
      <div className="taskcard">
        <span className={(this.props.finished) ? "taskend" : "taskactiv"}>
          {this.props.title}
        </span>
          <button onClick={() => this.props.toggle(this.props.id)} className={(this.props.finished) ? "buttend" : "buttactiv"}>
            {this.props.finished ? "Redo" : "Done"}
          </button>
    </div>
    )
  }
}



export default Task
