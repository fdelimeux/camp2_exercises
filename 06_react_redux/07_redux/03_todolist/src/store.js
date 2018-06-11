import { createStore } from 'redux';
import { CheckTask } from './store/selector.js';
import Choices from './store/reducer';

const Store = createStore(Choices);

export default Store
