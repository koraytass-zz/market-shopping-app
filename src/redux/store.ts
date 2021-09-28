import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootReducer from './reducers';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer/*, applyMiddleware(sagaMiddleware)*/);

// sagaMiddleware.run();

export default store;