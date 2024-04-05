import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesMainComponent } from './cases-main.component';

describe('CasesMainComponent', () => {
  let component: CasesMainComponent;
  let fixture: ComponentFixture<CasesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesMainComponent]
    });
    fixture = TestBed.createComponent(CasesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
