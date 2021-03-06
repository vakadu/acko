module.exports = {
    entry: {
        App: __dirname + "/app/assets/scripts/App.js",
        Plugin: __dirname + "/app/assets/scripts/Plugins.js",
    },
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "[name].js" /*[name] will keep name dynamic*/
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                //applying babel for only js
                exclude: /node_modules/
            }
        ]
    }
};
