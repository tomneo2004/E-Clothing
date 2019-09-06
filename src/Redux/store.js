import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import RootReducer from './root-reducer';

const middlewares = [Logger];
const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
