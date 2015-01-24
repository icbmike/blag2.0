'use strict';

module.exports = function(blogPostService, $stateParams) {
	this.post = blogPostService.getPost($stateParams.id);
};