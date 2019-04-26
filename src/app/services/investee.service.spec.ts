import { TestBed, inject } from '@angular/core/testing';

import { InvesteeService } from './investee.service';

describe('InvesteeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvesteeService]
    });
  });

  it('should be created', inject([InvesteeService], (service: InvesteeService) => {
    expect(service).toBeTruthy();
  }));
});
