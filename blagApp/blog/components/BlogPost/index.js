'use strict';

var blagApp = require('angular').module('blagApp');

blagApp.controller('BlogPostController', ['BlogPostService', require('./blog-post-controller')]);

blagApp.controller('ArchiveController', ['BlogPostService', require('./archive-controller')]);
