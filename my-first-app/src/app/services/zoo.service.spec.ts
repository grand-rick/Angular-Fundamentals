import { TestBed } from '@angular/core/testing';

import { ZooService } from './zoo.service';

describe('ZooService', () => {
  let service: ZooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
