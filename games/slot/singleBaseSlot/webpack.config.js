const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry:  './src/Main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "path": require.resolve("path-browserify"),
            "url": require.resolve("url/")
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html'
        })
    ],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, '/public'),
    //         publicPath: '/public',
    //     }
    // },
};
