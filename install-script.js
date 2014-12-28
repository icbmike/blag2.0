'use strict';

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/blagDb');

var User = mongoose.model('User', require('./models/user'));

User.register(new User({ username: 'Mike'}), process.env.BLAG_ADMIN_PASSWORD || 'password', function(err){
	if(err) console.log(err);

	process.exit(0);
});    
