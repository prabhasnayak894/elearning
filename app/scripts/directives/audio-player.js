'use strict';

/**
 * @ngdoc directive
 * @name pocApp.directive:audioPlayer
 * @description
 * # audioPlayer
 */
angular.module('pocApp')
	.directive('audioPlayer', ['ngAudio', function (ngAudio) {
		return {
			templateUrl: './views/audio-player.html',
			restrict: 'A',
			link: function (scope, element, attrs) {
  				scope.audio = JSON.parse(attrs.audio);

  				scope.player = ngAudio.load(scope.audio.url);

  				scope.player.volume = 0.5;
  				scope.player.paused = true;

  				scope.$watch('player.paused', function(newValue, oldValue) {
  					scope.play_pause = ( newValue ) ? 'Play' : 'Pause';
  				}, true);

  				scope.$watch('player.muting', function(newValue, oldValue) {
  					scope.mute_unmute = ( newValue ) ? 'Unmute' : 'Mute';
  				}, true);
			}
		};
	}]);