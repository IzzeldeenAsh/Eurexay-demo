import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCasesTableComponent } from './available-cases-table.component';

describe('AvailableCasesTableComponent', () => {
  let component: AvailableCasesTableComponent;
  let fixture: ComponentFixture<AvailableCasesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableCasesTableComponent]
    });
    fixture = TestBed.createComponent(AvailableCasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
