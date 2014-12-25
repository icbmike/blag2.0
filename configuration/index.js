'use strict';

module.exports = function(app){

	app.use(cookieParser());
    app.use(session({ secret: process.env.EXPRESS_SESSION_SECRET || 'I like pie' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

	require('./passport');

	app.engine('jade', require('jade').__express);
	app.use(express.static('public'));
};