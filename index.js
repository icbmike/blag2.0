//DB SHIT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blagDb');

//Define all our models
require('./models');

//WEB APP SHIT
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var BlogPost = mongoose.model('BlogPost');
	BlogPost.find({}, function(err, posts) {
		res.send(posts);
	});
});

app.post('/blogPost', function(req, res) {
	var BlogPost = mongoose.model('BlogPost');
	var newPost = new BlogPost();
	newPost.title = "Yea Boi";
	newPost.content = "Sick article";

	newPost.save(function(err, newPost) {
		if (!err) res.send(newPost);
		else res.send('Oh Noe!');
	});

});

var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});