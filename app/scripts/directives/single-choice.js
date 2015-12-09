'use strict';

/**
 * @ngdoc directive
 * @name pocApp.directive:singleChoice
 * @description
 * # singleChoice
 */
angular.module('pocApp')
	.directive('singleChoice', function () {
		return {
			templateUrl: './views/single-choice.html',
			restrict: 'A',
			link: function ( scope, element, attrs ) {
				scope.questions = JSON.parse(attrs.questions);
				
				scope.submit = function() {
					scope.corrects = [];
					$('.question-wrapper').each(function(index) {
						var correct = "No";
						$(this).find('input').each(function() {
							if($(this).is(':checked')) {
								if(parseInt($(this).val()) == scope.questions[index].correct) {
									correct = "Yes";
								};
							};
						});
						scope.corrects[index] = correct;
					});
				};
			}
		};
	});
