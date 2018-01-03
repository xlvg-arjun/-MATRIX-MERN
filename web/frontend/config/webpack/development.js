module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
};
