import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementRecordsComponent } from './case-management-records.component';

describe('CaseManagementRecordsComponent', () => {
  let component: CaseManagementRecordsComponent;
  let fixture: ComponentFixture<CaseManagementRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseManagementRecordsComponent]
    });
    fixture = TestBed.createComponent(CaseManagementRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
