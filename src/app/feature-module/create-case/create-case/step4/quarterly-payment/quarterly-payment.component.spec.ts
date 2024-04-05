import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyPaymentComponent } from './quarterly-payment.component';

describe('QuarterlyPaymentComponent', () => {
  let component: QuarterlyPaymentComponent;
  let fixture: ComponentFixture<QuarterlyPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterlyPaymentComponent]
    });
    fixture = TestBed.createComponent(QuarterlyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
