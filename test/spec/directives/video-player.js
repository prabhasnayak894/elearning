'use strict';

describe('Directive: videoPlayer', function () {

  // load the directive's module
  beforeEach(module('pocApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<video-player></video-player>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the videoPlayer directive');
  }));
});
