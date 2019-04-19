import { TestBed } from '@angular/core/testing';

import { NumberDataService } from './number-data.service';

describe('NumberDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberDataService = TestBed.get(NumberDataService);
    expect(service).toBeTruthy();
  });
});
