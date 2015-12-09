'use strict';

describe('Directive: singleChoice', function () {

  // load the directive's module
  beforeEach(module('pocApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<single-choice></single-choice>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the singleChoice directive');
  }));
});
