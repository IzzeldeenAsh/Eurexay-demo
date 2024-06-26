import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitSpinnerComponent } from './wait-spinner.component';

describe('WaitSpinnerComponent', () => {
  let component: WaitSpinnerComponent;
  let fixture: ComponentFixture<WaitSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitSpinnerComponent]
    });
    fixture = TestBed.createComponent(WaitSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
