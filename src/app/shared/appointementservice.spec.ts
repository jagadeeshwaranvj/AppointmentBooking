import { TestBed } from '@angular/core/testing';

import { Appointementservice } from './appointementservice';

describe('Appointementservice', () => {
  let service: Appointementservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Appointementservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
