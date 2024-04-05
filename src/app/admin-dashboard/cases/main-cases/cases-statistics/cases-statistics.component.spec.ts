import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesStatisticsComponent } from './cases-statistics.component';

describe('CasesStatisticsComponent', () => {
  let component: CasesStatisticsComponent;
  let fixture: ComponentFixture<CasesStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesStatisticsComponent]
    });
    fixture = TestBed.createComponent(CasesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
