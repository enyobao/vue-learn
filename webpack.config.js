const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        publicPath: "/",
        filename: '[name].[hash].bundle.js',
        path: path.join(__dirname, 'build')
    },
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "vue-style-loader",
                    use: "css-loader",
                    publicPath: "../../"
                })
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(ttf|eot|svg|woff)(\?(\w|#)*)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/font/[name].[ext]"
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.vue'
        ],
            alias: {
            vue: path.resolve(__dirname, 'node_modules', 'vue', 'dist', 'vue.min.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html',
            hash: false
        }),
        new ExtractTextPlugin("main.css")
    ]
};