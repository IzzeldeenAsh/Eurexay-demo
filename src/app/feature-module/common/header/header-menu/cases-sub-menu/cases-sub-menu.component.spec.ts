import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSubMenuComponent } from './cases-sub-menu.component';

describe('CasesSubMenuComponent', () => {
  let component: CasesSubMenuComponent;
  let fixture: ComponentFixture<CasesSubMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesSubMenuComponent]
    });
    fixture = TestBed.createComponent(CasesSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
