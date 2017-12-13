module.exports = {
	entry: "./client/index.js",
	output: {
		path: __dirname + "/build",
		filename: "app.js"
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
		}]
	},
}
