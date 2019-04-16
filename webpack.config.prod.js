const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: [ './src/index.js', './sass/main.scss' ],
	output: {
		filename: '[contenthash].bundle.js',
		path: path.resolve(__dirname, './dist/static/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	watch: true,
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			filename: path.resolve(__dirname, './dist/index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[contenthash].bundle.css'
		})
	]
};
