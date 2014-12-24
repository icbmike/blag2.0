'use strict';

var mongoose = require('mongoose');

module.exports = function(app) {

	//Blog Posts
	var blogPostRoutes = require('./blog-post');
	app.get('/blogPost', blogPostRoutes.get);
	app.post('/blogPost', blogPostRoutes.post);
};