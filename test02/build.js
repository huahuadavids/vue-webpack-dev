var config = require("./config2.js");
var webpack = require("webpack")
var chalk = require("chalk")

webpack(config, function (err, stats) {
  console.log( chalk.yellow("finish\n"));
});

