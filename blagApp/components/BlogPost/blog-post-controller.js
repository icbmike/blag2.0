'use strict';

module.exports = function(blogPostService){

	blogPostService.listBlogPosts().then(function(){
		this.blogPosts = blogPostService.posts;
	}.bind(this));

	this.message = 'Heyo';
}