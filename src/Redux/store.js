import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import RootReducer from './root-reducer';
import {persistStore} from 'redux-persist';

const middlewares = [];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(Logger);
}
const store = createStore(RootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
