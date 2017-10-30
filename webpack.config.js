const webpack = require('webpack')
const debug = process.env.NODE_ENV !== 'production'

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  entry: './src/bundle.js',
  module: {
    rules: [{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }, {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'react-css-modules']
          }
        }
      },
      { test: /\.(png|woff|woff2|otf|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'scripts.min.js'
  },
  plugins: debug ? [
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false })
  ]
}
