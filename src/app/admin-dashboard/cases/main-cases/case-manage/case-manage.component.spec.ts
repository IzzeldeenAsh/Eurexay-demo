import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManageComponent } from './case-manage.component';

describe('CaseManageComponent', () => {
  let component: CaseManageComponent;
  let fixture: ComponentFixture<CaseManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseManageComponent]
    });
    fixture = TestBed.createComponent(CaseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
