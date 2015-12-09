'use strict';

/**
 * @ngdoc service
 * @name pocApp.AppDataService
 * @description
 * # AppDataService
 * Service in the pocApp.
 */
angular.module('pocApp')
	.service('AppDataService', ['$http', '$rootScope', function ($http, $rootScope) {
		this.welcome_data = '';
		this.chapters_data = '';

		this.getWelcomeData = function () {
			var that = this;
			$http({
				url:'./data/welcome.json',
				method:"GET"
			})
			.success(function(data){
				if (data.error) {
					console.log("error");
				} else {
					that.welcome_data = data;
					$rootScope.$broadcast('welcome_data_loaded', true);
				};
			}).error(function(data) {
				console.log("error");
			});
		};

		this.getChaptersData = function () {
			var that = this;
			$http({
				url:'./data/chapters.json',
				method:"GET"
			})
			.success(function(data){
				if (data.error) {
					console.log("error");
				} else {
					that.chapters_data = data;
					$rootScope.$broadcast('chapters_data_loaded', true);
				};
			}).error(function(data) {
				console.log("error");
			});
		};
	}]);