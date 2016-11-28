var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: ['babel-polyfill', // Set up an ES6-ish environment
		path.resolve(__dirname, './index.js') // Add your application's scripts below
	],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
  },
	node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
  },
  module: {
		loaders: [{
			test: /.jsx?$/, // Only run `.js` and `.jsx` files through Babel
			loader: 'babel-loader',
			exclude: [
				path.resolve(__dirname, "node_modules"),
			]
		}, {
			test: /\.json$/,
			loader: "json-loader"
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}]
	},
	resolve: {
    alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
    }
  },
  resolveLoader: {
		root: path.resolve(__dirname, 'node_modules')
	},
	debug: true
};
