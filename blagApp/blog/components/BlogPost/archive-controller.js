'use strict';

var _ = require('lodash');

module.exports = function(blogPostService) {
	blogPostService.listBlogPosts().then(function(){
		var postsGroupedByMonth = _.groupBy(blogPostService.posts, function(post){
			return new Date(post.date).toLocaleString('en-nz', { month: 'long' });
		});
		this.months = _.map(_.keys(postsGroupedByMonth), function(key){
			return {
				text: key,
				posts: postsGroupedByMonth[key]
			};
		});

	}.bind(this));
};