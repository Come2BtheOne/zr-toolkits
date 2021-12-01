let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let pkg = require('../package.json');

module.exports = {
    entry:'./src/index.ts',
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve('dist'),
        library      : 'tks',
        // libraryTarget: 'umd',
        libraryExport: "default",
    },
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        //host: '0.0.0.0',
        port: 9090,
        open: false,
        hot: false
    },
    module:{
        rules:[
			{
			  test: /\.tsx?$/,
			  use: {
				loader: 'ts-loader'
			  }
			}
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: false,
    }),
	],
    optimization: {
        minimize: false
    }
}
