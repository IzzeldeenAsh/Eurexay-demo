import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCasesComponent } from './available-cases.component';

describe('AvailableCasesComponent', () => {
  let component: AvailableCasesComponent;
  let fixture: ComponentFixture<AvailableCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableCasesComponent]
    });
    fixture = TestBed.createComponent(AvailableCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
