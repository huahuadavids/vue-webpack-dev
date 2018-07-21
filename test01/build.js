var webpack = require("webpack");
var config = require("./config");
var chalk = require("chalk")
webpack(config, function(){
    console.log(
        chalk.yellow("done\n")
    )
})