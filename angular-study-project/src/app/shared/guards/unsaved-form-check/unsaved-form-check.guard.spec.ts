import { TestBed } from '@angular/core/testing';

import { UnsavedFormCheckGuard } from './unsaved-form-check.guard';

describe('UnsavedFormCheckGuard', () => {
  let guard: UnsavedFormCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsavedFormCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
