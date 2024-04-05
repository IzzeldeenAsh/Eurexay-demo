import { TestBed } from '@angular/core/testing';

import { PrizeCreateService } from './prize-create.service';

describe('PrizeCreateService', () => {
  let service: PrizeCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrizeCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
