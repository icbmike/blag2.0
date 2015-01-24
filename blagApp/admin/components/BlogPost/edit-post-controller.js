'use strict';

module.exports = function(blogPostService, $state, $stateParams){

	this.isEditing = !!$stateParams.id;

	if(this.isEditing){
		blogPostService.getPost($stateParams.id).then(function(postToEdit){
			this.title = postToEdit.title;
			this.content = postToEdit.content;
			this.tags = postToEdit.tags;
		}.bind(this));
	}

	this.submitPost = function(){
		var promise = this.isEditing 
			? blogPostService.editPost($stateParams.id, this.title, this.content, [])
			: blogPostService.createPost(this.title, this.content, []);

		promise.then(function(){
			$state.go('adminRoot');
		});
	};
};