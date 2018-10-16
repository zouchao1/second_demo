const server_config=require('./server_config');
const webpack_config=require('./webpack_confg');
const config={
	server_config,
	webpack_config,
	sass_config: {outputStyle: 'compressed'}
}
module.exports=config;