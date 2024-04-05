import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverablesPaymentComponent } from './deliverables-payment.component';

describe('DeliverablesPaymentComponent', () => {
  let component: DeliverablesPaymentComponent;
  let fixture: ComponentFixture<DeliverablesPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverablesPaymentComponent]
    });
    fixture = TestBed.createComponent(DeliverablesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
