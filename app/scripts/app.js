'use strict';

/**
 * @ngdoc overview
 * @name pocApp
 * @description
 * # pocApp
 *
 * Main module of the application.
 */
angular
  .module('pocApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDragDrop',
    'ngAudio',
    'ngVideo'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
      })
      .when('/home/:chapter_id', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/welcome'
      });
  })
  .run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    if ($location.path() != '/welcome') {
      $location.path('/welcome');
    }

    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
  }]);
