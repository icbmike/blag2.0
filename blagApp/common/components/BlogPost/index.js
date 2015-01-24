'use strict';

var blagApp = require('angular').module('blagApp.common');

blagApp.service('BlogPostService', ['Restangular', require('./blog-post-service')]);

blagApp.directive('blogPost', [require('./blog-post-directive')]);
