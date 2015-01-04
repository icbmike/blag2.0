
var blagApp = require('angular').module('blagAdminApp');

blagApp.config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
	
 	$urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('root', {
		url: '/admin',
		template: 'templates/admin.html'
	})
	.state('newPost', {
		url: '/newPost',
		templateUrl: '/templates/newPost.html'
	});
});
