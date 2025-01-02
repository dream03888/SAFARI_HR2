import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkModalComponent } from './work-modal.component';

describe('WorkModalComponent', () => {
  let component: WorkModalComponent;
  let fixture: ComponentFixture<WorkModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkModalComponent]
    });
    fixture = TestBed.createComponent(WorkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
