'use strict';

angular.module('stuffApp')
  .controller('GottenCtrl', function ($scope) {
    $scope.gotten = [
      'banana',
      'coffee',
      'brown sugar'
    ];
    console.log('in gotten');
  });
