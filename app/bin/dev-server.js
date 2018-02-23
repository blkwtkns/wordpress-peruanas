import express from 'express';
import webpack from 'webpack';
const { host, port, webpackPort } = require('../config/env');


const config = require('../webpack/webpack.config.dev');
const compiler = webpack(config);
const serverOptions = {
  quiet: true,
  noInfo: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
};

const app = express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(webpackPort, (err) => {
  if(err) {
    console.error(err);
  } else {
    console.info(`Webpack development server listening on port ${webpackPort}`);	
  }
});
