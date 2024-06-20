import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationLeaveDataComponent } from './vacation-leave-data.component';

describe('VacationLeaveDataComponent', () => {
  let component: VacationLeaveDataComponent;
  let fixture: ComponentFixture<VacationLeaveDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationLeaveDataComponent]
    });
    fixture = TestBed.createComponent(VacationLeaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
