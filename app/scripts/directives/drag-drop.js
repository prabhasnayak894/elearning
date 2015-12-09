'use strict';

/**
 * @ngdoc directive
 * @name pocApp.directive:dragDrop
 * @description
 * # dragDrop
 */
angular.module('pocApp')
	.directive('dragDrop', function () {
		return {
			templateUrl: './views/drag-drop.html',
			restrict: 'A',
			link: function (scope, element, attrs) {
  				scope.questions = JSON.parse(attrs.questions);

  				scope.dropComplete = function(drag) {
  					if (parseInt($(drag.toElement).attr('index')) == scope.questions[0].correct) {
  						alert("Correct");
  					} else {
  						alert("Wrong");
  					};
  				}
			}
		};
	});