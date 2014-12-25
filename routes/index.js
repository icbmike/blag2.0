'use strict';

module.exports = function(app) {

	//Blog Posts
	var blogPostRoutes = require('./blog-post');
	app.get('/blogPosts', blogPostRoutes.get);
	app.post('/blogPosts', blogPostRoutes.post);

	//Application page
	app.get('/*', function(req, res){
		res.render('index.jade', {isDevelopment: process.env.NODE_ENV !== 'production'});
	});
};