'use strict';

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

module.exports = BlogPostService;
