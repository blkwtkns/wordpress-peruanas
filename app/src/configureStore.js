import {
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger'
import rootReducer from './rootReducer'; 

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// logging
if(typeof window !== 'undefined' && window.document){
  middleware.push(createLogger({collapsed: true}));
}
// mount it to store
// NB only single reducer used since there is only one
// current reducer
export default (history, initialState) => {
  // saga middleware
  const reduxRouterMiddleware = routerMiddleware(history);

  middleware.push(reduxRouterMiddleware);

  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    );
  
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer'));
    });
  }
  return store;

};
