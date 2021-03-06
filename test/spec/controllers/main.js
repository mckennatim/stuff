'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('stuffApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a timeStamp to the scope', function () {
    expect(scope.timestamp.toString().length).toEqual(13);
  });
});
