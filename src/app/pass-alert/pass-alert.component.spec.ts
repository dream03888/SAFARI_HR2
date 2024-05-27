import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassAlertComponent } from './pass-alert.component';

describe('PassAlertComponent', () => {
  let component: PassAlertComponent;
  let fixture: ComponentFixture<PassAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassAlertComponent]
    });
    fixture = TestBed.createComponent(PassAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
