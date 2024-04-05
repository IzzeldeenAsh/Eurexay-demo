import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeSummaryComponent } from './prize-summary.component';

describe('PrizeSummaryComponent', () => {
  let component: PrizeSummaryComponent;
  let fixture: ComponentFixture<PrizeSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeSummaryComponent]
    });
    fixture = TestBed.createComponent(PrizeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
