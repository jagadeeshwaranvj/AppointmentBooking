import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authguardGuard } from './authguard-guard';

describe('authguardGuard', () => {
  const guard = authguardGuard('customer');
  const executeGuard: CanActivateFn = (...guardParameters: Parameters<CanActivateFn>) =>
    TestBed.runInInjectionContext(() => guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
