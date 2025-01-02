import { TestBed } from '@angular/core/testing';

import { PassFormService } from './pass-form.service';

describe('PassFormService', () => {
  let service: PassFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
