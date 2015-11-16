var express = require('express');
var app = express ();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

app.get('/',  function(req,res){
	res.render('index');
});

app.get('/results', function(req,res){
	var qParams=[];
	for (var p in req.query){
		qParams.push({"text_box":p, "sent": req.query[p]})
	}
	var context={};
	context.request_type= "GET"
	context.datalist = qParams;
	res.render('results', context);
});

app.post('/results', function(req,res){
	var qParams = [];
	for (var p in req.body){
		qParams.push({"text_box":p, "sent": req.body[p]})
	}
	var context={};
	context.request_type= "POST"
	context.datalist = qParams;
	res.render('results', context);
});

app.use('/404', function(req,res){
	res.status(404);
	res.render('404');

});

app.use('/500', function(req,res){
	res.status(500);
	res.render('500');

});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
});