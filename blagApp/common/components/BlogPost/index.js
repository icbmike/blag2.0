'use strict';

var blagApp = require('angular').module('blagApp.common');

blagApp.service('BlogPostService', ['Restangular', require('./blog-post-service')]);

blagApp.controller('BlogPostController', ['BlogPostService', require('./blog-post-controller')]);

blagApp.directive('blogPost', [require('./blog-post-directive')]);
