import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerParticipantCardComponent } from './owner-participant-card.component';

describe('OwnerParticipantCardComponent', () => {
  let component: OwnerParticipantCardComponent;
  let fixture: ComponentFixture<OwnerParticipantCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerParticipantCardComponent]
    });
    fixture = TestBed.createComponent(OwnerParticipantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
