import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePrizesTableComponent } from './available-prizes-table.component';

describe('AvailablePrizesTableComponent', () => {
  let component: AvailablePrizesTableComponent;
  let fixture: ComponentFixture<AvailablePrizesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailablePrizesTableComponent]
    });
    fixture = TestBed.createComponent(AvailablePrizesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
