const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/App.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: []
};