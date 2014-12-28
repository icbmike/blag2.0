'use strict';

var cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	checkSSL = require('./ssl'),
	express = require('express');


module.exports = function(app) {
	checkSSL(app);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(session({
		secret: process.env.EXPRESS_SESSION_SECRET || 'I like pie',
		saveUninitialized: true,
		resave: true
	})); 
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	require('./passport');

	app.engine('jade', require('jade').__express);
	app.use(express.static('public'));

	app.use(function(req, res, next){
		res.locals.isDevelopment = process.env.NODE_ENV !== 'production'
		next();
	});
};