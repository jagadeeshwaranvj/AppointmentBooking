import { TestBed } from '@angular/core/testing';

import { Serviceservices } from './serviceservices';

describe('Serviceservices', () => {
  let service: Serviceservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
