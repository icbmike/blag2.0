'use strict';

var angular = require('angular');
			  require('angular-ui-router');
			  require('restangular');

require('/common');

require('yourmum');


angular.module('blagApp', ['ui.router', 'restangular', 'blagApp.common']);

require('./configuration/routes');

require('./components/BlogPost/');
require('./components/tags/')
