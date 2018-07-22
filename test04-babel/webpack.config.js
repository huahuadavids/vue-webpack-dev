module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname,
        filename: "app.bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                //use: "babel-loader",
                use:{
                   loader: "babel-loader"   ,
                   options:{
                       presets:["env"]
                   }  
                },
                exclude: "/node_modules/"
            }
        ]
    }
}