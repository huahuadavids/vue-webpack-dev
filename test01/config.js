const path = require("path")

const config = {
    entry:{
       main:  path.join(__dirname,"src.js")
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    mode: "production"
}
module.exports = config;