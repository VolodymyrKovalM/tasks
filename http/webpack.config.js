const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
	context: SRC_DIR,
	entry: [
		'babel-polyfill',
		'./index.js',
	],
	output: {
		path: DIST_DIR,
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: SRC_DIR,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				include: SRC_DIR,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
			{
				test: /\.(jpe?g|png)$/i,
				include: SRC_DIR,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]?[hash]',
							outputPath: 'img/',
							limit: 10000,
						},
					},
					{
						loader: 'img-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [SRC_DIR, 'node_modules'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Star Wars',
			template: './index.ejs',
			favicon: './favicon.png',
			inject: true,
			hash: true,
		}),
		new webpack.LoaderOptionsPlugin({ minimize: true }),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	devtool: 'eval-source-map',
};
