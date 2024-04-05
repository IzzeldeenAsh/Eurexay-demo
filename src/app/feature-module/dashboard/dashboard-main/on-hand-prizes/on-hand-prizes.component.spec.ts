import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHandPrizesComponent } from './on-hand-prizes.component';

describe('OnHandPrizesComponent', () => {
  let component: OnHandPrizesComponent;
  let fixture: ComponentFixture<OnHandPrizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnHandPrizesComponent]
    });
    fixture = TestBed.createComponent(OnHandPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
