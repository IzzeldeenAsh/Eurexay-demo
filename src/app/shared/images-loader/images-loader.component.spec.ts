import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesLoaderComponent } from './images-loader.component';

describe('ImagesLoaderComponent', () => {
  let component: ImagesLoaderComponent;
  let fixture: ComponentFixture<ImagesLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesLoaderComponent]
    });
    fixture = TestBed.createComponent(ImagesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
