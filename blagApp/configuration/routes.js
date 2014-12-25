
var blagApp = require('angular').module('blagApp');

blagApp.config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
	
 	$urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('root', {
		url: '/',
		templateUrl: 'templates/root.html'
	})
	.state('archive', {
		url: '/archive',
		templateUrl: 'templates/archive.html'
	});
});