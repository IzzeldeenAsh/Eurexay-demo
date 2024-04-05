import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterChartComponent } from './counter-chart.component';

describe('CounterChartComponent', () => {
  let component: CounterChartComponent;
  let fixture: ComponentFixture<CounterChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterChartComponent]
    });
    fixture = TestBed.createComponent(CounterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
