'use strict';

var angular = require('angular');
			  require('angular-ui-router');
			  require('restangular');


angular.module('blagApp', ['ui.router', 'restangular']);

require('./configuration/routes');

require('./components/BlogPost/');
