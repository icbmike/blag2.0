//DB SHIT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blagDb');

//Define all our models
require('./models');

//WEB APP SHIT
var express = require('express');
var app = express();

require('./routes')(app);

var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});