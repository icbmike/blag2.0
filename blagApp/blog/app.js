'use strict';

var angular = require('angular');
			  require('angular-ui-router');
			  require('restangular');

require('../common');

angular.module('blagApp', ['ui.router', 'restangular', 'ngSanitize', 'blagApp.common']);

require('./configuration/routes');

require('./components/tags/')
