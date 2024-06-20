import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLeaveDataComponent } from './personal-leave-data.component';

describe('PersonalLeaveDataComponent', () => {
  let component: PersonalLeaveDataComponent;
  let fixture: ComponentFixture<PersonalLeaveDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLeaveDataComponent]
    });
    fixture = TestBed.createComponent(PersonalLeaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
