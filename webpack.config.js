const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./view/App.ts'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            }
        ]
    },
    // resolve: {
    //     alias: {
    //       Components: path.resolve(__dirname, 'components/')
    //     }
    //   },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./view/index.html"
        })
    ]
};

