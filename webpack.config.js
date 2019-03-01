const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },

      {
         test: /\.html$/,
         loader: 'html-srcsets-loader',
         options: {
             attrs: ['img:src', ':srcset'],
         },
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/gallery.html',
    filename: 'gallery.html'
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/apperal.html',
    filename: 'apperal.html',
  }),
  ]

};
