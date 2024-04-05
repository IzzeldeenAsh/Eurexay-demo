import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePrizesComponent } from './available-prizes.component';

describe('AvailablePrizesComponent', () => {
  let component: AvailablePrizesComponent;
  let fixture: ComponentFixture<AvailablePrizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailablePrizesComponent]
    });
    fixture = TestBed.createComponent(AvailablePrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
