import { TestBed } from '@angular/core/testing';

import { CaseDataSharingService } from './case-data-sharing.service';

describe('CaseDataSharingService', () => {
  let service: CaseDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
