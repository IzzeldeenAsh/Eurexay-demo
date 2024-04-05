import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCreateComponent } from './case-create.component';

describe('CaseCreateComponent', () => {
  let component: CaseCreateComponent;
  let fixture: ComponentFixture<CaseCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseCreateComponent]
    });
    fixture = TestBed.createComponent(CaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
