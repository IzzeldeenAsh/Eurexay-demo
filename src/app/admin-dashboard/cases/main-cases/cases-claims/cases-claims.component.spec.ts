import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesClaimsComponent } from './cases-claims.component';

describe('CasesClaimsComponent', () => {
  let component: CasesClaimsComponent;
  let fixture: ComponentFixture<CasesClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesClaimsComponent]
    });
    fixture = TestBed.createComponent(CasesClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
