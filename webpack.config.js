const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
module.exports = {
  entry: './frontend/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
    }),
  ],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: {
      '/api': 'https://localhost:3000/',
    },
    historyApiFallback: true,
  },
}
