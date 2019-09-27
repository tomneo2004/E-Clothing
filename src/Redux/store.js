import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import RootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(Logger);
}
const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
