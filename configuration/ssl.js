'use strict';

var forceSSL = require('express-force-ssl');

module.exports = function(app){
	if(process.env.NODE_ENV === 'production'){
		app.use(forceSSL);
	}
};