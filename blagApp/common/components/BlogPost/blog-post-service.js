'use strict';

var _ = require('lodash');

var BlogPostService = function (restangular){
	this.api = restangular.all('BlogPosts');

	this.posts = [];
}

BlogPostService.prototype.listBlogPosts = function() {
	return this.api.getList().then(function(blogPosts){
		this.posts = blogPosts;
		_.forEach(this.posts, function(post){
			post.tags = ['woo', 'best post'];
		});
		return blogPosts;
	}.bind(this));
};

BlogPostService.prototype.createPost = function(title, content, tags) {
	return this.api.post({title:title, content:content, tags:tags});
};

module.exports = BlogPostService;
