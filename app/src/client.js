// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  match,
  Router,
  browserHistory
} from 'react-router';
import {
  Provider
} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import rootReducer from './rootReducer'; 
import rootSaga from './sagas/rootSaga'
import routes from './routes';

const dest = document.getElementById('mount');
const store = configureStore(browserHistory, window.__data);
store.runSaga(rootSaga)
const history = syncHistoryWithStore(browserHistory, store);

const component = (
  <Router history={history}>
    {routes(store)}
  </Router>
)

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
)

if (process.env.NODE_ENV !== 'production') {
  global.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}
