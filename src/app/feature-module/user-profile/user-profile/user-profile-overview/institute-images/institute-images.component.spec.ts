import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteImagesComponent } from './institute-images.component';

describe('InstituteImagesComponent', () => {
  let component: InstituteImagesComponent;
  let fixture: ComponentFixture<InstituteImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteImagesComponent]
    });
    fixture = TestBed.createComponent(InstituteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
