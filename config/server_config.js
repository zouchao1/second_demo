 const proxy=require("http-proxy-middleware")
 
 const server_config={
 	host:'localhost',
 	port:8080,
 	livereload:true,
	 open:true,
	 middleware:[
		 proxy('/eme',{ 
		 target: 'https://h5.ele.me',
		 changeOrigin: true,
		 pathRewrite: { 
			 '^/eme': ''
		 }
		 }),
		 proxy('/food',{ 
			target: 'https://h5.ele.me',
			changeOrigin: true,
			pathRewrite: { 
				'^/food': ''
			}
			})
	 ]
 }
//https://h5.ele.me/restapi/shopping/openapi/entries?latitude=40.042475&longitude=116.305969&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
 module.exports=server_config;