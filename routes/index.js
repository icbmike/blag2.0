'use strict';

var passport = require('passport');

module.exports = function(app) {

	//Blog Posts
	var blogPostRoutes = require('./blog-post');
	app.get('/blogPosts', blogPostRoutes.get);
	app.post('/blogPosts', blogPostRoutes.post);

	app.get('/login',function(req, res){
		res.render('login.jade');
	})
	app.post('/login', passport.authenticate('local', { successRedirect: '/admin',
                                                    failureRedirect: '/login' }));
	app.get('/admin', function(req, res){
		res.render('admin.jade');
	});

	//Application page
	app.get('/*', function(req, res){
		res.render('index.jade', {isDevelopment: process.env.NODE_ENV !== 'production'});
	});
};