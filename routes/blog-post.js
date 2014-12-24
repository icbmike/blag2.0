'use strict';

module.exports = {
	get: function(req, res) {
		var BlogPost = mongoose.model('BlogPost');
		BlogPost.find({}, function(err, posts) {
			res.send(posts);
		});
	},
	post: function(req, res) {
		var BlogPost = mongoose.model('BlogPost');
		var newPost = new BlogPost();
		newPost.title = "Yea Boi";
		newPost.content = "Sick article";

		newPost.save(function(err, newPost) {
			if (!err) res.send(newPost);
			else res.send('Oh Noe!');
		});
	}
};