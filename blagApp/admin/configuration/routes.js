
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
		templateUrl: 'templates/admin.html'
	})
	.state('newPost', {
		url: '/newPost',
		templateUrl: '/templates/editPost.html'
	})
	.state('editPost', {
		url: '/editPost/:id',
		templateUrl: '/templates/editPost.html'
	});
});
