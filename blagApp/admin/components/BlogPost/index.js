'use strict';

var blagApp = require('angular').module('blagAdminApp');

blagApp.controller('EditPostController', ['BlogPostService', '$state', '$stateParams', require('./edit-post-controller')]);

blagApp.controller('BlogAdminController', ['BlogPostService', require('./blog-admin-controller')]);
