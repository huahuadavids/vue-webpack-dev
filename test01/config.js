var path = require("path")
const config = {
    entry: path.join(__dirname,"src.js"),
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
}
module.exports = config;