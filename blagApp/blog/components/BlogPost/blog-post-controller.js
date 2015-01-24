'use strict';

module.exports = function(blogPostService, $stateParams) {
	this.isLoading = true;
	blogPostService.getPost($stateParams.id).then(function(post){
		this.isLoading = false;
		this.post = post;
	}.bind(this));
};
