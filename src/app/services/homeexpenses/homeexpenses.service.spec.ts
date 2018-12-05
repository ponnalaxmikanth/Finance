import { TestBed } from '@angular/core/testing';

import { HomeexpensesService } from './homeexpenses.service';

describe('HomeexpensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeexpensesService = TestBed.get(HomeexpensesService);
    expect(service).toBeTruthy();
  });
});
