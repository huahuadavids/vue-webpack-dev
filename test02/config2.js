var path = require("path");
/**
 * @这一句必须写，要不然无法打包
 */
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'production',
  plugins: [
    new VueLoaderPlugin(),
  ]
}

