'use strict';

var blagApp = require('angular').module('blagAdminApp');

blagApp.controller('NewPostController', ['BlogPostService', require('./new-post-controller')]);
