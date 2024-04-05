import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHandCaseComponent } from './on-hand-case.component';

describe('OnHandCaseComponent', () => {
  let component: OnHandCaseComponent;
  let fixture: ComponentFixture<OnHandCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnHandCaseComponent]
    });
    fixture = TestBed.createComponent(OnHandCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
