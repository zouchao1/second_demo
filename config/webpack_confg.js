
const webpack_config={
	mode:'development',
	entry:{
		app:'./src/js/app.js'
	},
	output:{
		filename:"[name].js"
	},
	module:{
		rules:[
		{
			test:/\.html$/,
			use:'string-loader'
		},
		{   
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/, // 代表不包括哪些
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-transform-runtime']
				}
			}
		}
		]
	}
}
module.exports=webpack_config;