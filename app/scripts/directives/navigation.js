'use strict';

/**
 * @ngdoc directive
 * @name pocApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('pocApp')
	.directive('navigation', ['AppDataService', '$rootScope', function (AppDataService, $rootScope) {
		return {
			restrict: 'EA',
			link: function postLink(scope, element, attrs) {
				$rootScope.$on('chapters_data_loaded', function() {
					scope.chapters = AppDataService.chapters_data;
				});	

				scope.openChapter = function(chapter_id) {
					scope.currentChapter = chapter_id;
					$rootScope.$broadcast('current_changed', true);
				};		
			}
		};
	}]);