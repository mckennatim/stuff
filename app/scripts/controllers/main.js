'use strict';

angular.module('stuffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.timestamp = Date.now();
    console.log($scope.timestamp);  
  });

angular.module('stuffApp') 
.controller('InpCtrl', function ($scope) {
 $scope.list = [];
 $scope.text = 'hello';
 $scope.submit = function() {
   if ($scope.text) {
     $scope.list.push(this.text);
     $scope.text = '';
   }
 };    
});

angular.module('stuffApp')
.controller('GottenCtrl', function ($scope) {
$scope.gotten = [
  'banana',
  'coffee',
  'brown sugar',
  'bacon'
];
console.log('in gotten');
});