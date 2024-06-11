import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAlertComponent } from './match-alert.component';

describe('MatchAlertComponent', () => {
  let component: MatchAlertComponent;
  let fixture: ComponentFixture<MatchAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchAlertComponent]
    });
    fixture = TestBed.createComponent(MatchAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
