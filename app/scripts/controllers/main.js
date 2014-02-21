'use strict';

angular.module('stuffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.stuff = [
      'banana',
      'coffee',
      'brown sugar'
    ];
    $scope.timestamp = 'now';
  });
