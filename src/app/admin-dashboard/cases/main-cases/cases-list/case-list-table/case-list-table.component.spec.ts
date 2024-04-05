import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseListTableComponent } from './case-list-table.component';

describe('CaseListTableComponent', () => {
  let component: CaseListTableComponent;
  let fixture: ComponentFixture<CaseListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseListTableComponent]
    });
    fixture = TestBed.createComponent(CaseListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
