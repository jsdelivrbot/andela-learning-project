const express 		= require('express');
const app 			= new express();
const path 			= require('path');
const api_routes 	= require('./routes/api')();
const bodyParser 	= require('body-parser');
const validator 	= require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());
app.use('/static',express.static('bundle'));

app.use('/api/v1/',api_routes);


app.get('*',function(req,res){
	res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.listen(39072,function(){
	console.log('Running on :39072...');
});