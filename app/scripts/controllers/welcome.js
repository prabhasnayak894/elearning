'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
	.controller('WelcomeCtrl', ['$scope', '$rootScope', 'AppDataService', function ($scope, $rootScope, AppDataService) {
		AppDataService.getWelcomeData();

		$rootScope.$on('welcome_data_loaded', function() {
			$scope.dynamicStyles();

			$scope.loadElements();
		});

		$scope.loadElements = function() {
			$scope.h1 = AppDataService.welcome_data.welcome.elements['h1'];
			$scope.p = AppDataService.welcome_data.welcome.elements['p'];
			$scope.a = AppDataService.welcome_data.welcome.elements['a'];
		};	

		$scope.dynamicStyles = function() {
			$scope.wrapper_style = {
				'width': AppDataService.welcome_data.welcome.width + 'px',
				'height': AppDataService.welcome_data.welcome.height + 'px',
				'background-image': 'url(' + AppDataService.welcome_data.welcome.bgImage + ')',
				'background-size': AppDataService.welcome_data.welcome.width + 'px ' + AppDataService.welcome_data.welcome.height + 'px'
			};
		};
	}]);
