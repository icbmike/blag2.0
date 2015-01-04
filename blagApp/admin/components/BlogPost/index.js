'use strict';

var blagApp = require('angular').module('blagAdminApp');

blagApp.service('BlogPostService', ['Restangular', require('./blog-post-service')]);

blagApp.controller('BlogPostController', ['BlogPostService', require('./blog-post-controller')]);
