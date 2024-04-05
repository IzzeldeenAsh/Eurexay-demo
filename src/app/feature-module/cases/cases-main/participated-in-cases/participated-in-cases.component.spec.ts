import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatedInCasesComponent } from './participated-in-cases.component';

describe('ParticipatedInCasesComponent', () => {
  let component: ParticipatedInCasesComponent;
  let fixture: ComponentFixture<ParticipatedInCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipatedInCasesComponent]
    });
    fixture = TestBed.createComponent(ParticipatedInCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
