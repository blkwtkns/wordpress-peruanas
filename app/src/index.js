import express from 'express';
import path from 'path';
import favicons from 'connect-favicons';
import { port } from '../config/env'
import React from 'react';
/* import ReactDOM from 'react-dom/server'; */
import ReactDOMServer from 'react-dom/server';
import HTML from './layouts/HTML';
import configureStore from './configureStore'
import {
  Provider
} from 'react-redux';
import {
  match,
  RouterContext,
} from 'react-router';
import createHistory from 'react-router/lib/createMemoryHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import rootSaga from './sagas/rootSaga'
import routes from './routes';

const doctype = '<!DOCTYPE html>'
const app = express();

app.use(favicons(path.join(__dirname, '..', 'raicesFavicons')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use( (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    webpackIsomorphicTools.refresh();
  }

  const memoryHistory = createHistory(req.originalUrl);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(doctype + ReactDOMServer.renderToString(<HTML assets={webpackIsomorphicTools.assets()} state={store} />));
  }

  match({
    history,
    routes: routes(store),
    location: req.url
  }, (error, redirect, props) => {
    if (error) {
      res.status(500).send(error.message);
      hydrateOnClient();
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const rootComponent = (
        <Provider store={store} key="provider">
            <RouterContext {...props}/>
          </Provider>
      );

      store.runSaga(rootSaga).done.then(() => {
        const state = store.getState();

        res.status(200).send(doctype + ReactDOMServer.renderToStaticMarkup(<HTML assets={webpackIsomorphicTools.assets()} component={rootComponent} state={state} />));
      })

      ReactDOMServer.renderToString(rootComponent)
      store.close();

    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening on port ${port}!`);
  }
});
