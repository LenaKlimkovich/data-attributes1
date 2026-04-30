const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/app.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, 

  devServer: {
    static: './dist',
    open: true,
    hot: false,      
  liveReload: false 
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
