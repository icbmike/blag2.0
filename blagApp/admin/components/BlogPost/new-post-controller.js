'use strict';

module.exports = function(blogPostService){
	this.submitPost = function(){
		console.log(this.postContent);
	}.bind(this);
}