import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrizeMonitorComponent } from './my-prize-monitor.component';

describe('MyPrizeMonitorComponent', () => {
  let component: MyPrizeMonitorComponent;
  let fixture: ComponentFixture<MyPrizeMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPrizeMonitorComponent]
    });
    fixture = TestBed.createComponent(MyPrizeMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
