import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const storeFn = () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;

};
export default storeFn;