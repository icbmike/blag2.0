'use strict';

var blagApp = require('angular').module('blagApp');

blagApp.controller('BlogPostController', ['BlogPostService', '$stateParams', require('./blog-post-controller')]);
blagApp.controller('BlogPostsController', ['BlogPostService', require('./blog-posts-controller')]);

blagApp.controller('ArchiveController', ['BlogPostService', require('./archive-controller')]);
