import { TestBed } from '@angular/core/testing';

import { ToDateService } from './to-date.service';

describe('ToDateService', () => {
  let service: ToDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
