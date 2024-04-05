import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeBodyComponent } from './prize-body.component';

describe('PrizeBodyComponent', () => {
  let component: PrizeBodyComponent;
  let fixture: ComponentFixture<PrizeBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeBodyComponent]
    });
    fixture = TestBed.createComponent(PrizeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
