import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { InterceptorService, DEFAULT_TIMEOUT } from './interceptor.service';
import { InterceptorService } from './interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
//   { provide: DEFAULT_TIMEOUT, useValue: 30000 }
];