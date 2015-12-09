'use strict';

/**
 * @ngdoc directive
 * @name pocApp.directive:videoPlayer
 * @description
 * # videoPlayer
 */
angular.module('pocApp')
	.directive('videoPlayer', ['video', function (video) {
		return {
			templateUrl: './views/video-player.html',
			restrict: 'A',
			link: function (scope, element, attrs) {
				scope.video_json = JSON.parse(attrs.video);

  				video.addSource('mp4', scope.video_json.url);
			}
		};
	}]);
