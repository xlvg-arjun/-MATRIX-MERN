const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader'],
        }),
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
    new ExtractTextPlugin({ filename: 'style.css' }),
  ],
};
