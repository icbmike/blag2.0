'use strict';

var markdown = require('markdown').markdown;

module.exports = function(){
	return {
		restrict: 'E',
		scope: {
			post: '='
		},
		link: function(scope){
			scope.renderedContent = markdown.toHTML(scope.post.content);
		},
		template: require('./blog-post-template.html').trim()
	};
};