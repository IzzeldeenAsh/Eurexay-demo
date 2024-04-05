import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropdownCountriesComponent } from './custom-dropdown-countries.component';

describe('CustomDropdownCountriesComponent', () => {
  let component: CustomDropdownCountriesComponent;
  let fixture: ComponentFixture<CustomDropdownCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDropdownCountriesComponent]
    });
    fixture = TestBed.createComponent(CustomDropdownCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
