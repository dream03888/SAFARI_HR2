import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassViewComponent } from './pass-view.component';

describe('PassViewComponent', () => {
  let component: PassViewComponent;
  let fixture: ComponentFixture<PassViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassViewComponent]
    });
    fixture = TestBed.createComponent(PassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
