
const initialState = {tasktable : [{ id:0, title:"first task", finished : true },{ id:1, title:"second task", finished : false }]}

function CheckTask(list, id) {
  const newlist = list.map((task) =>
    (task.id === id) ? {id:id, title:task.title, finished: !task.finished} : task
  );
  console.log(newlist);
  return newlist;
}

function AddTask(list, task) {
  const newlist = list.push({id:100,title:task.current,finished:false});
  console.log(newlist);
  return newlist;
}

const Choices = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return {
        ...state,
        tasktable : CheckTask(state.tasktable ,action.id)
        }

    case 'ADD_TASK':
      return {
        ...state,
        tasktable : AddTask(state.tasktable ,action)
        }

    default:
      return state
  }
}

export default Choices
