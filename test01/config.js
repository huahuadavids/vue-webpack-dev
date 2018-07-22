const path = require("path")

const config = {
    entry: {
        main: path.join(__dirname, "src.js")
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
        ///filename : '[name].min.[hash:5].js'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
}
module.exports = config;