import { TestBed } from '@angular/core/testing';

import { POroleGuard } from './porole.guard';

describe('POroleGuard', () => {
  let guard: POroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(POroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
