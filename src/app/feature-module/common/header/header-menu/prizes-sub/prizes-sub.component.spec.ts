import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesSubComponent } from './prizes-sub.component';

describe('PrizesSubComponent', () => {
  let component: PrizesSubComponent;
  let fixture: ComponentFixture<PrizesSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizesSubComponent]
    });
    fixture = TestBed.createComponent(PrizesSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
