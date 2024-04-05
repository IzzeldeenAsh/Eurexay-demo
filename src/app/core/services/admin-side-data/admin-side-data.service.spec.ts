import { TestBed } from '@angular/core/testing';

import { AdminSideDataService } from './admin-side-data.service';

describe('AdminSideDataService', () => {
  let service: AdminSideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
