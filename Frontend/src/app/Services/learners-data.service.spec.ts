import { TestBed } from '@angular/core/testing';

import { LearnersDataService } from './learners-data.service';

describe('LearnersDataService', () => {
  let service: LearnersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
