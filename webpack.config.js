const fs = require('fs');
const path = require('path');
const webpack = require('webpack');


const packageJsonPath = path.join(__dirname, 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const {version} = JSON.parse(packageJsonContent);

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'Naja.js',
		library: 'naja',
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
		],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				unused: true,
				dead_code: true,
				warnings: false,
			},
			comments: /$./,
			sourceMap: true,
		}),
		new webpack.BannerPlugin({banner: `Naja.js\nv${version}\n\nby Jiří Pudil <https://jiripudil.cz>`}),
	]
};
