import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDocumentsComponent } from './user-profile-documents.component';

describe('UserProfileDocumentsComponent', () => {
  let component: UserProfileDocumentsComponent;
  let fixture: ComponentFixture<UserProfileDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileDocumentsComponent]
    });
    fixture = TestBed.createComponent(UserProfileDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
