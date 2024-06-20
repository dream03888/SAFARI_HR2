import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SickLeaveDataComponent } from './sick-leave-data.component';

describe('SickLeaveDataComponent', () => {
  let component: SickLeaveDataComponent;
  let fixture: ComponentFixture<SickLeaveDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SickLeaveDataComponent]
    });
    fixture = TestBed.createComponent(SickLeaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
