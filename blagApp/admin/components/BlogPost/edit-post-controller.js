'use strict';

module.exports = function(blogPostService, $state, $stateParams){

	this.isEditing = !!$stateParams.id;

	if(this.isEditing){
		var postToEdit = blogPostService.getPost($stateParams.id);

		this.title = postToEdit.title;
		this.content = postToEdit.content;
		this.tags = postToEdit.tags;
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