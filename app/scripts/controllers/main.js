'use strict';

angular.module('stuffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.timestamp = Date.now();
    console.log($scope.timestamp);  
  });
