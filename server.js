const config = require('.webpack.config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8086/");

const conpiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: 'build/',
    publicPath: 'assets',
    hot: true,
    inline: true
});
server.listen(8086);