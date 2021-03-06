'use strict';
let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    'car.prod': './app/car.ts'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false
};
