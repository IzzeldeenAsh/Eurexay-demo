import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PariticipatedInCasesTableComponent } from './pariticipated-in-cases-table.component';

describe('PariticipatedInCasesTableComponent', () => {
  let component: PariticipatedInCasesTableComponent;
  let fixture: ComponentFixture<PariticipatedInCasesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PariticipatedInCasesTableComponent]
    });
    fixture = TestBed.createComponent(PariticipatedInCasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
