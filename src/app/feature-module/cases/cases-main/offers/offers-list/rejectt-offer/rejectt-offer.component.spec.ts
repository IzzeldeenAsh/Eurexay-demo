import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejecttOfferComponent } from './rejectt-offer.component';

describe('RejecttOfferComponent', () => {
  let component: RejecttOfferComponent;
  let fixture: ComponentFixture<RejecttOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejecttOfferComponent]
    });
    fixture = TestBed.createComponent(RejecttOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
