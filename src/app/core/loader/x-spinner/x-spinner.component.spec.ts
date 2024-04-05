import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSpinnerComponent } from './x-spinner.component';

describe('XSpinnerComponent', () => {
  let component: XSpinnerComponent;
  let fixture: ComponentFixture<XSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XSpinnerComponent]
    });
    fixture = TestBed.createComponent(XSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
