import { createStore } from 'redux';

const initialState = { counter : 0 }

const Choices = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDONE':
      return {
        ...state,
        counter: state.counter +1
        }

    case 'MINUSONE':
      return {
        ...state,
        counter: state.counter -1
        }

    case 'RESET':
      return {
        ...state,
        counter: 0
        }

    default:
      return state
  }
}

const Store = createStore(Choices)

export default Store
