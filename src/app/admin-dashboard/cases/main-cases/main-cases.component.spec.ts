import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCasesComponent } from './main-cases.component';

describe('MainCasesComponent', () => {
  let component: MainCasesComponent;
  let fixture: ComponentFixture<MainCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCasesComponent]
    });
    fixture = TestBed.createComponent(MainCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
