'use strict';

var _ = require('lodash');

var BlogPostService = function (restangular){
	this.api = restangular.all('BlogPosts');

	this.posts = [];
}

BlogPostService.prototype.listBlogPosts = function() {
	return this.api.getList().then(function(blogPosts){
		this.posts = blogPosts;
		return blogPosts;
	}.bind(this));
};

BlogPostService.prototype.createPost = function(title, content, tags) {
	return this.api.post({title:title, content:content, tags:tags});
};

BlogPostService.prototype.editPost = function(id, title, content, tags) {
	return this.getPost(id).then(function(post){

		post.title = title;
		post.content = content;
		post.tags = tags;

		return post.save();
	});
};

BlogPostService.prototype.deletePost = function(blogPost) {
	return blogPost.remove();
};

BlogPostService.prototype.getPost = function(id) {
	return this.api.get(id);
};

module.exports = BlogPostService;
