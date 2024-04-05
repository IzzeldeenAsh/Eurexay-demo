import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCasesTableComponent } from './my-cases-table.component';

describe('MyCasesTableComponent', () => {
  let component: MyCasesTableComponent;
  let fixture: ComponentFixture<MyCasesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCasesTableComponent]
    });
    fixture = TestBed.createComponent(MyCasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
