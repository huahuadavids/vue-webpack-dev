var webpack = require("webpack");
var config = require("./webpack.config");
var chalk = require("chalk")
webpack(config, function(){
    console.log(
        chalk.yellow("done\n")
    )
})