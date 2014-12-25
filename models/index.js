
var mongoose = require('mongoose');

mongoose.model('BlogPost', require('./blog-post'));
mongoose.model('User', require('./user'));
