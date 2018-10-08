import { TestBed } from '@angular/core/testing';

import { AuthTokenInterceptorService } from './auth-token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

describe('AuthTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }]
  }));

  it('should be created', () => {
    const service: AuthTokenInterceptorService = TestBed.get(AuthTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
