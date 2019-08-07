const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

// Configure html-webpack-plugin.
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.join(process.cwd(), './public/index.html'),
  filename: path.join(process.cwd(), './dist/index.html')
});

// Configure status logs while build.
const statsConfig = {
  colors: true,
  hash: false,
  timings: false,
  assets: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: false
};

module.exports = {
  entry: path.join(process.cwd(), './index.js'),
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      }
    ]
  },
  plugins: [htmlWebpackPlugin, new ErrorOverlayPlugin()],
  stats: statsConfig,
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
