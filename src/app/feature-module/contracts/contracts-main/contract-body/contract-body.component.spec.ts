import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractBodyComponent } from './contract-body.component';

describe('ContractBodyComponent', () => {
  let component: ContractBodyComponent;
  let fixture: ComponentFixture<ContractBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractBodyComponent]
    });
    fixture = TestBed.createComponent(ContractBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
