import { TestBed } from '@angular/core/testing';

import { LoanAppService } from './loan-app-service';

describe('LoanAppService', () => {
  let service: LoanAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
