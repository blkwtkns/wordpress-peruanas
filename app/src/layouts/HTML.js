import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import { webpackHost, webpackPort } from '../../config/env';

export default class Raices extends Component {
  render() {
    const { assets, component, state } = this.props;
    const content = component ? ReactDOMServer.renderToString(component) : '';
    /* const background = require('../assets/machu-picchu-inca-peru.jpeg') */

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <title>Raices Peruanas - Peruvian Dance, Music, and Culture</title>

          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="theme-color" content="#ffffff"/>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>


          {/* production */}
          {Object.keys(assets.styles).map((style, key) =>
            <link
              href={assets.styles[style]}
              key={key} media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />
          )}

          {/* development */}
          {
            Object.keys(assets.styles).length === 0 ?
              <style dangerouslySetInnerHTML={{ __html: require('../components/Main/main.css')._style }} /> :
            null
          }

        </head>
        <body>
          <div id="mount" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(state)};` }}
            charSet="UTF-8"
          />
          {/* <script
            src={
              process.env.NODE_ENV === 'development' ?
              `http://${webpackHost}:${webpackPort}/assets/main.js` :
              '/assets/main.js'
            } */}
            {Object.keys(assets.javascript).map((script, i) =>
              <script src={assets.javascript[script]} key={i}/>
            )}
          <script src="https://use.fontawesome.com/e076ed21e5.js"/>
        </body>
      </html>
    );
  }
}

Raices.propTypes = {
  assets: React.PropTypes.object,
  component: React.PropTypes.node,
  state: React.PropTypes.object,
};
