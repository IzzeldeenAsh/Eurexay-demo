import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersMainComponent } from './offers-main.component';

describe('OffersMainComponent', () => {
  let component: OffersMainComponent;
  let fixture: ComponentFixture<OffersMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersMainComponent]
    });
    fixture = TestBed.createComponent(OffersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
