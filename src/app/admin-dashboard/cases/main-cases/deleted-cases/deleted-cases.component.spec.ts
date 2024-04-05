import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedCasesComponent } from './deleted-cases.component';

describe('DeletedCasesComponent', () => {
  let component: DeletedCasesComponent;
  let fixture: ComponentFixture<DeletedCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedCasesComponent]
    });
    fixture = TestBed.createComponent(DeletedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
