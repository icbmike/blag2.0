'use strict';

module.exports = function(blogPostService){
	this.submitPost = function(){
		blogPostService.createPost(this.title, this.content, []);
	}.bind(this);
}