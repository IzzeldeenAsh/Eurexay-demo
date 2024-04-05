import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeSummaryHeaderComponent } from './prize-summary-header.component';

describe('PrizeSummaryHeaderComponent', () => {
  let component: PrizeSummaryHeaderComponent;
  let fixture: ComponentFixture<PrizeSummaryHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeSummaryHeaderComponent]
    });
    fixture = TestBed.createComponent(PrizeSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
