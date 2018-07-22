var path = require("path")
const config = {
    entry :{
        app : path.join(__dirname,"app.js")
    },
    output:{
        path: __dirname,
        filename: "bundle.js"
    },
    mode: "production"
}
module.exports = config;