'use strict';

var passport = require('passport');


function ensureAuthenticated(req, res, next) {
	if(!req.user) res.redirect('/login');
	else next();
};

module.exports = function(app) {

	//Blog Posts
	var blogPostRoutes = require('./blog-post');
	app.get('/blogPosts', blogPostRoutes.getList);
	app.get('/blogPosts/:id', blogPostRoutes.getById);
	app.post('/blogPosts', blogPostRoutes.post);
	app.delete('/blogPosts/:id', blogPostRoutes.delete);
	app.put('/blogPosts/:id', blogPostRoutes.put);


	app.get('/login', function(req, res) {
		res.render('login.jade');
	});

	app.post('/login', passport.authenticate('local', {
		successRedirect: '/admin',
		failureRedirect: '/'
	}));

	app.post('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/admin', ensureAuthenticated, function(req, res) {
		res.render('admin.jade');
	});

	//Application page
	app.get('/*', function(req, res) {
		res.render('index.jade');
	});
};