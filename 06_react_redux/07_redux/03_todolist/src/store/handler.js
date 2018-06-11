export function mapDispatchToProps(dispatch) {
  return {
    toggle: (pid) => dispatch({type : "TOGGLE_STATUS", id: pid}),
    addtask: (task) => dispatch({type : "ADD_TASK", title: task.title})
  }
}
