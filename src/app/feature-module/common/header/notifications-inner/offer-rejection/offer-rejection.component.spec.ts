import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRejectionComponent } from './offer-rejection.component';

describe('OfferRejectionComponent', () => {
  let component: OfferRejectionComponent;
  let fixture: ComponentFixture<OfferRejectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferRejectionComponent]
    });
    fixture = TestBed.createComponent(OfferRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
