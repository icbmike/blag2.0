'use strict';

module.exports = function(){
	return {
		restrict: 'E',
		scope: {
			post: '='
		},
		link: function(scope){

		},
		template: require('./blog-post-template.html').trim()
	};
};