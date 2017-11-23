import {inject, TestBed} from '@angular/core/testing';

import {TestService} from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
  it('should return 0 for any value', inject([TestService], (service: TestService) => {
    expect(service.getTest('kuku')).toBe(0);
  }));
});