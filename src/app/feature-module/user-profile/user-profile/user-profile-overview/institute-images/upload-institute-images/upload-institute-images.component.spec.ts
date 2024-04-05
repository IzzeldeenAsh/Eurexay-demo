import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInstituteImagesComponent } from './upload-institute-images.component';

describe('UploadInstituteImagesComponent', () => {
  let component: UploadInstituteImagesComponent;
  let fixture: ComponentFixture<UploadInstituteImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadInstituteImagesComponent]
    });
    fixture = TestBed.createComponent(UploadInstituteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
