import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseMessagesComponent } from './case-messages.component';

describe('CaseMessagesComponent', () => {
  let component: CaseMessagesComponent;
  let fixture: ComponentFixture<CaseMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseMessagesComponent]
    });
    fixture = TestBed.createComponent(CaseMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
