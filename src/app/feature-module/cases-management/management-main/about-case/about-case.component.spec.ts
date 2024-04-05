import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCaseComponent } from './about-case.component';

describe('AboutCaseComponent', () => {
  let component: AboutCaseComponent;
  let fixture: ComponentFixture<AboutCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCaseComponent]
    });
    fixture = TestBed.createComponent(AboutCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
