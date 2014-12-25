'use strict';

exports.up = function(db, next){
	var mongoose = require('mongoose');
	mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/blagDb');

	var User = mongoose.model('User', require('../models/user'));
	
    User.register(new User({ username: 'Mike'}), 'password', function(err){
    	if(err) console.log(err);

		next();
    });    
};

exports.down = function(db, next){
    var mongoose = require('mongoose');
	mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/blagDb');

	var User = mongoose.model('User', require('../models/user'));

    User.remove({}, function(err){
    	if(err) console.log(err);

    	next();
    });
};
