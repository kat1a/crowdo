import { TestBed } from '@angular/core/testing';

import { FundingsService } from './fundings.service';

describe('FundingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundingsService = TestBed.get(FundingsService);
    expect(service).toBeTruthy();
  });
});
