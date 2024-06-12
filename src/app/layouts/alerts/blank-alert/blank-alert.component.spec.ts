import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankAlertComponent } from './blank-alert.component';

describe('BlankAlertComponent', () => {
  let component: BlankAlertComponent;
  let fixture: ComponentFixture<BlankAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankAlertComponent]
    });
    fixture = TestBed.createComponent(BlankAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
