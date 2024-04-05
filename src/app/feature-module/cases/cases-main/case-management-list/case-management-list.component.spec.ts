import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementListComponent } from './case-management-list.component';

describe('CaseManagementListComponent', () => {
  let component: CaseManagementListComponent;
  let fixture: ComponentFixture<CaseManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseManagementListComponent]
    });
    fixture = TestBed.createComponent(CaseManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
