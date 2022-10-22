import { TestBed } from '@angular/core/testing';

import { THroleGuard } from './throle.guard';

describe('THroleGuard', () => {
  let guard: THroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(THroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
