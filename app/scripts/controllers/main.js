'use strict';
var app = angular.module('stuffApp');


app.controller('MainCtrl', function ($scope) {
    $scope.dog = 'mutt';
    console.log($scope.dog);  
  });

app.controller('TimeCtrl', function ($scope) {
    $scope.timestamp = Date.now();
    console.log($scope.timestamp);  
  });  

app.controller('InpCtrl', function ($scope) {
 $scope.list = [];
 $scope.text = 'hello';
 $scope.submit = function() {
   if ($scope.text) {
     $scope.list.push(this.text);
     $scope.text = '';
   }
 };    
});

app.controller('GottenCtrl', function ($scope) {
  $scope.gotten = [
    'banana',
    'coffee',
    'brown sugar',
    'bacon'
  ];
});