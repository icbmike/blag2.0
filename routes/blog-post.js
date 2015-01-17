'use strict';

var mongoose = require('mongoose'),
	_ = require('lodash');
var BlogPost = mongoose.model('BlogPost');

module.exports = {
	get: function(req, res) {
		BlogPost.find({},  null, {sort: {date: -1}}, function(err, posts) {
			res.send(posts);
		});
	},
	post: function(req, res) {
		var newPost = new BlogPost();
		newPost.title = req.body.title;
		newPost.content = req.body.content;

		newPost.save(function(err, newPost) {
			if (!err) res.send(newPost);
			else res.send('Oh Noe!');
		});
	},
	put: function(req, res) {
		BlogPost.update({_id: req.params.id}, 
			{title: req.body.title, content: req.body.content}, 
			function(err){
				if(err)
					console.log(err);
			});
	},
	delete: function(req, res) {
		var id  = req.params.id;
		BlogPost.findByIdAndRemove(id, function(err){
			if(err)
				console.log(err);
		});
	}
};