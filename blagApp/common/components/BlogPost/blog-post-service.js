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

BlogPostService.prototype.editPost = function(id, title, content, tags) {
	var post = this.getPost(id);

	post.title = title;
	post.content = content;
	post.tags = tags;

	return post.save();
};

BlogPostService.prototype.deletePost = function(blogPost) {
	return blogPost.remove().then(function(){
		return this.listBlogPosts();
	}.bind(this));
};

BlogPostService.prototype.getPost = function(id) {
	return _.find(this.posts, function(post){
		return post.id === id
	});
};

module.exports = BlogPostService;
