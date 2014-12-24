'use strict';

var mongoose = require('mongoose');

module.exports = function(app) {

	//Application page
	// app.get('/', function(req, res){
	// 	res.render('index.html');
	// });

	//Blog Posts
	var blogPostRoutes = require('./blog-post');
	app.get('/blogPost', blogPostRoutes.get);
	app.post('/blogPost', blogPostRoutes.post);
};