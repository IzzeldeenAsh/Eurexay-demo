import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPaymentComponent } from './pending-payment.component';

describe('PendingPaymentComponent', () => {
  let component: PendingPaymentComponent;
  let fixture: ComponentFixture<PendingPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingPaymentComponent]
    });
    fixture = TestBed.createComponent(PendingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
