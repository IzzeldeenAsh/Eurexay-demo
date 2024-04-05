import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInvoicesTableComponent } from './my-invoices-table.component';

describe('MyInvoicesTableComponent', () => {
  let component: MyInvoicesTableComponent;
  let fixture: ComponentFixture<MyInvoicesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyInvoicesTableComponent]
    });
    fixture = TestBed.createComponent(MyInvoicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
