'use strict';

module.exports = function(blogPostService){
	function init(){
		blogPostService.listBlogPosts().then(function(){
			this.blogPosts = blogPostService.posts;
		}.bind(this));
	}

	init.call(this);

	this.deletePost = function(postToDelete){
		blogPostService.deletePost(postToDelete).then(function(){
			init.call(this);
		}.bind(this));
	};
};