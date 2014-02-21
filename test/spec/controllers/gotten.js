'use strict';

describe('Controller: GottenCtrl', function () {

  // load the controller's module
  beforeEach(module('stuffApp'));

  var GottenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GottenCtrl = $controller('GottenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of gotten to the scope', function () {
    expect(scope.gotten.length).toBe(3);
  });
});
