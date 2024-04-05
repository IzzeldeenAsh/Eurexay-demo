import { TestBed } from '@angular/core/testing';

import { PrizesGetService } from './prizes-get.service';

describe('PrizesGetService', () => {
  let service: PrizesGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrizesGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
