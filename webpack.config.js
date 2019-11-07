const path = require('path')
module.exports = {
  entry: {
    
  },
  output: {
      filename: 'budle.js',
      path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test : /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  mode: 'development'
}