'use strict';

angular.module('stuffApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/gotten', {
        templateUrl: 'views/gotten.html',
        controller: 'GottenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
