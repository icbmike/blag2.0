'use strict';

var markdown = require('markdown').markdown;

module.exports = function(){
	return {
		restrict: 'E',
		scope: {
			input: '='
		},
		link: function(scope){
			scope.$watch('input', function(input){
				scope.output = markdown.toHTML(input || '');
			});
		},
		template: '<div ng-bind-html="output"></div>'
	};
};	
