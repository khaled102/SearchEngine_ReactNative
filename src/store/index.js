import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const Middlewares = [];
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

Middlewares.push(sagaMiddleware);

if(__DEV__){
  Middlewares.push(logger);
}

export default function configureStore() {

  let store = createStore(rootReducer, applyMiddleware(...Middlewares));
  sagaMiddleware.run(rootSaga);
  return store;

}
