import { TestBed } from '@angular/core/testing';

import HttpInterceptorAuthServiceService from './http-interceptor-auth.service';

describe('HttpInterceptorAuthServiceService', () => {
  let service: HttpInterceptorAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
