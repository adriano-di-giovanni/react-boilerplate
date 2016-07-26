// module deps
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {
  buildPath,
  indexHtmlPath,
  nodeModulesPath,
  srcPath,
} from './constants';

const config = {
  context: srcPath,
  entry: './index',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: buildPath,
    pathinfo: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: indexHtmlPath,
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  resolveLoader: {
    root: nodeModulesPath,
  },
};

export default config;
