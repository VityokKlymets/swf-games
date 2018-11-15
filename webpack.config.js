const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  }
}
