var express = require('express');
var app = express ();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var session = require('espress-sessions');
app.use (sessions({secret:'secretSquirle'}));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

app.get('/count', function (req, res){
	var context = {};
	context.count = req.session.count || 0;
	req.session.count = context.count +1;
	res.render("counter", context);
});


app.post ('/count', function (req, res){
	var context = {};
	if (req.body.command === "resetCount")
		req.session.count = 0;
	else
		context.err = true;
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