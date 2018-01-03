const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

const FRONT_ROOT = join(__dirname, '..', '..');
const SRC_ROOT = join(FRONT_ROOT, 'src');

module.exports = {
  target: 'web',
  entry: join(FRONT_ROOT, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: join(FRONT_ROOT, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader'], 
      },
    ],
  },
  resolve: {
    alias: {
      containers: join(SRC_ROOT, 'containers'),
      assets: join(SRC_ROOT, 'assets'),
      components: join(SRC_ROOT, 'components'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: join(SRC_ROOT, 'assets', 'html', 'template.html'),
  })],
};
