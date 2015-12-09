'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
	.controller('HomeCtrl', ['$scope', '$rootScope', 'AppDataService', '$location', function ($scope, $rootScope, AppDataService, $location) {
		AppDataService.getChaptersData();

		$scope.currentChapter = 1;

		$rootScope.$on('chapters_data_loaded', function() {
			$scope.dynamicStyles();

			$scope.loadChapters('chapter_' + $scope.currentChapter);
		});	

		$rootScope.$on('current_changed', function() {
			$scope.loadChapters('chapter_' + $scope.currentChapter);
		});	

		$scope.dynamicStyles = function() {
			$scope.wrapper_style = {
				'width': AppDataService.welcome_data.welcome.width + 'px',
				'height': AppDataService.welcome_data.welcome.height + 'px',
				'background-image': 'url(' + AppDataService.welcome_data.welcome.bgImage + ')',
				'background-size': AppDataService.welcome_data.welcome.width + 'px ' + AppDataService.welcome_data.welcome.height + 'px'
			};
		};

		$scope.loadChapters = function(chapter_id) {
			$scope.chapter = AppDataService.chapters_data[chapter_id];
			if( $scope.currentChapter == 1 ) {
				$scope.loadElements();
			}
			
			$location.path('/home/' + $scope.chapter.target, false)
		};

		$scope.loadElements = function() {
			$scope.h1 = $scope.chapter.elements['h1'];
			$scope.p = $scope.chapter.elements['p'];
		};
	}]);
