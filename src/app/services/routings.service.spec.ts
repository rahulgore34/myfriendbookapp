import { TestBed } from '@angular/core/testing';

import { RoutingsService } from './routings.service';

describe('RoutingsService', () => {
  let service: RoutingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
