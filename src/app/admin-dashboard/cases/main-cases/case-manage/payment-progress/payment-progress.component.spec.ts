import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProgressComponent } from './payment-progress.component';

describe('PaymentProgressComponent', () => {
  let component: PaymentProgressComponent;
  let fixture: ComponentFixture<PaymentProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentProgressComponent]
    });
    fixture = TestBed.createComponent(PaymentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
