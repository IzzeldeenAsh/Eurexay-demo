import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMainComponent } from './management-main.component';

describe('ManagementMainComponent', () => {
  let component: ManagementMainComponent;
  let fixture: ComponentFixture<ManagementMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementMainComponent]
    });
    fixture = TestBed.createComponent(ManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
