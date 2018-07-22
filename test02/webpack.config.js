var path = require("path");
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
  mode: 'production', //wepack 4+ 
  plugins: [
    new VueLoaderPlugin(),
  ]
}

