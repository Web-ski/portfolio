const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
  // plugins: [
  //   new CleanWebpackPlugin('dist', {}),
  // ]
};