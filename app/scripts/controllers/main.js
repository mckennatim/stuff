'use strict';
var app = angular.module('stuffApp');

app.factory('Data', function() {
  return [
    'banana',
    'coffee',
    'brown sugar',
    'bacon'
  ];
});

app.controller('MainCtrl', function ($scope) {
    $scope.dog = 'mutt';
    console.log($scope.dog);  
  });

app.controller('TimeCtrl', function ($scope) {
  $scope.timestamp=Date.now();
  $scope.tubmit = function() {
    $scope.timestamp=Date.now();
 };    
    console.log($scope.timestamp);  
  });  

app.controller('InpCtrl', function ($scope, Data) {
 $scope.list = Data;
 $scope.text = 'hello';
 $scope.submit = function() {
   if ($scope.text) {
     $scope.list.push(this.text);
     $scope.text = '';
   }
 };    
});

app.controller('GottenCtrl', function ($scope, Data) {
  $scope.list = Data;
  $scope.gotten = [
    'banana',
    'coffee',
    'brown sugar',
    'bacon'
  ];
  console.log($scope.list);
  $scope.query='';
  $scope.rubmit = function(){
   if ($scope.query) {
     $scope.list.push(this.query);
     $scope.query = '';
   }
  }
});