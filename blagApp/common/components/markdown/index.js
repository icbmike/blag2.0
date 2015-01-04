'use strict';

var blagApp = require('angular').module('blagApp.common');

blagApp.directive('markdownPreview', [require('./markdown-preview-directive')]);