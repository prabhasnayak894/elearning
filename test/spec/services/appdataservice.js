'use strict';

describe('Service: AppDataService', function () {

  // load the service's module
  beforeEach(module('pocApp'));

  // instantiate service
  var AppDataService;
  beforeEach(inject(function (_AppDataService_) {
    AppDataService = _AppDataService_;
  }));

  it('should do something', function () {
    expect(!!AppDataService).toBe(true);
  });

});
