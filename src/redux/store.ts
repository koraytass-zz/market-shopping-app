import { createStore } from 'redux';
import "regenerator-runtime/runtime";
import rootReducer from './reducers';


const store = createStore(rootReducer);

export default store;