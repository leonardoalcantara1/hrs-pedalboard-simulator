angular.module('app')

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				
				.state('home', {
					url: '/',
					views: {
                        'home': {
                            templateUrl: 'views/home.html',
                            controller: 'AppController'
                        }
                    }
				})

			$locationProvider.html5Mode({
	            enabled: true,
	            requireBase: true
	        });
		}
	])