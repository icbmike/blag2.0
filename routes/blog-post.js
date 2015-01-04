'use strict';

var mongoose = require('mongoose');

module.exports = {
	get: function(req, res) {
		var BlogPost = mongoose.model('BlogPost');
		BlogPost.find({},  null, {sort: {date: -1}}, function(err, posts) {
			res.send(posts);
		});
	},
	post: function(req, res) {

		var BlogPost = mongoose.model('BlogPost');
		var newPost = new BlogPost();
		newPost.title = req.body.title;
		newPost.content = req.body.content;

		newPost.save(function(err, newPost) {
			if (!err) res.send(newPost);
			else res.send('Oh Noe!');
		});
	}
};