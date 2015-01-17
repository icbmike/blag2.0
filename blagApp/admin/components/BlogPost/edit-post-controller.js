'use strict';

module.exports = function(blogPostService, $stateParams){

	this.isEditing = !!$stateParams.id;

	if(this.isEditing){
		var postToEdit = blogPostService.getPost($stateParams.id);

		this.title = postToEdit.title;
		this.content = postToEdit.content;
		this.tags = postToEdit.tags;
	}

	this.submitPost = function(){
		if(this.isEditing){
			blogPostService.editPost($stateParams.id, this.title, this.content, []);
		}else {
			blogPostService.createPost(this.title, this.content, []);
		}
	};
};